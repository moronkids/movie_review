import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Styled from "styled-components";
const IconProfile = Styled.div`
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZWI1MDdmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMTgwIDI4NS41IDI1MC43IDIyMi41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0xODAgMjg1LjUgMjUwLjcgMjIyLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtzdHJva2U6I2ViNTA3ZjtzdHJva2Utd2lkdGg6OTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe3N0cm9rZTojZWI1MDdmO3N0cm9rZS13aWR0aDo5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTkuMywzNjAuMWMwLDI1LTIwLjMsNDUuMy00NS4zLDQ1LjNzLTQ1LjQtMjAuMy00NS40LTQ1LjNzMjAuMy00NS4zLDQ1LjMtNDUuM1MtOS4zLDMzNS4xLTkuMywzNjAuMXoiPjwvcGF0aD48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjkuNCw0NzkuOGgtMTY4LjFjMCwwLTguNC0zMy43LDE4LjctNDcuOGM1LjgtMywxMi4zLTQuMiwxOC44LTQuMmg5My4xYzYuNSwwLDEzLDEuMiwxOC44LDQuMiAgQzM3LjgsNDQ2LjEsMjkuNCw0NzkuOCwyOS40LDQ3OS44eiI+PC9wYXRoPjwvc3ZnPg==");
       width: 30px;
    height: 30px;
    background-size: cover;

`;
const IconReview = Styled.div`
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgtMC42OSAwLjY5KSByb3RhdGUoMCkgdHJhbnNsYXRlKC02MDAgLTYwMCkiIHN0eWxlPSJmaWxsOiNlYjUwN2YiPjxzdmcgZmlsbD0iI2ViNTA3ZiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNOTUuOSw1Ni4zTDk1LjksNTYuM2wtMTcuNi0zbC04LjUtMTZjLTAuNC0wLjktMS4yLTEtMS40LTFjLTAuMywwLTEuMSwwLjEtMS40LDFsLTguNSwxNmwtMTcuNiwzbDAsMCAgIGMtMC45LDAuMS0xLjMsMC44LTEuNCwxYy0wLjEsMC4yLTAuMywxLjEsMC41LDEuN2wxMi45LDEyLjVsLTIuOSwxOC4zYy0wLjIsMC45LDAuMywxLjQsMC42LDEuNmMwLjIsMC4xLDAuOSwwLjYsMS43LDAuMWwxNi4yLTcuOCAgIGwxNi4yLDcuOGMwLjgsMC41LDEuNSwwLjEsMS43LTAuMWMwLjMtMC4yLDAuOC0wLjcsMC42LTEuNmwtMi45LTE4LjNMOTYuOCw1OWMwLjctMC42LDAuNS0xLjQsMC41LTEuNyAgIEM5Ny4xLDU3LDk2LjgsNTYuMyw5NS45LDU2LjN6Ij48L3BhdGg+PHBhdGggZD0iTTExMi45LDI3LjhDOTQuMiw0LjYsNjAuMy0wLjUsMzUuNywxNi40QzEzLjMsMzEuNiw1LjMsNTkuNSwxMy45LDgzLjVMMi40LDExMWMtMC41LDEuMSwwLjYsMi4zLDEuOCwxLjkgICBjOS42LTMuMSwxOS41LTQuMiwyOS44LTIuNWMxOS45LDE0LjcsNDcuOCwxNS4zLDY4LjYtMC4yQzEyOC43LDkwLjcsMTMzLjYsNTMuMywxMTIuOSwyNy44eiBNOTcuNCwxMDMuMmMtOC43LDYuNS0xOSw5LjgtMjkuMyw5LjggICBjLTEwLjIsMC0yMC4zLTMuMi0yOS05LjZsLTEuNy0xLjJsLTItMC4zYy0zLjctMC42LTcuNS0wLjktMTEuMi0wLjljLTIuOCwwLTUuNiwwLjItOC40LDAuNWw3LjQtMTcuN2wtMS4xLTMuMiAgIGMtNy41LTIxLDAuMS00NC40LDE4LjUtNTdjMjAuOS0xNC4zLDQ5LjctMTAuMSw2NS42LDkuN3YwYzguNSwxMC41LDEyLjIsMjMuNiwxMC41LDM2LjlDMTE1LDgzLjQsMTA4LjEsOTUuMiw5Ny40LDEwMy4yeiI+PC9wYXRoPjwvZz48L3N2Zz48L2c+PC9zdmc+");
       width: 30px;
    height: 30px;
    background-size: cover;

`;
const IconSaved = Styled.div`
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZWI1MDdmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMzIsNDQuNTk1YzAuMjA1LDAsMC40MDEsMC4wODQsMC41NDIsMC4yMzJsMTQuNDE4LDE1LjExMnYtNDQuMTNIMzIuNzV2MTQuMjA0YzAsMC40MTQtMC4zMzYsMC43NS0wLjc1LDAuNzUgIHMtMC43NS0wLjMzNi0wLjc1LTAuNzVWMTUuODA5SDE3LjAzOXY0NC4xM2wxNC40MTgtMTUuMTEyQzMxLjU5OSw0NC42NzksMzEuNzk1LDQ0LjU5NSwzMiw0NC41OTV6Ij48L3BhdGg+PHBhdGggZD0iTTQ2LjE5NiwyLjkzOEgxNy44MDNjLTAuNDIxLDAtMC43NjQsMC4zNDMtMC43NjQsMC43NjR2MTAuNjA3aDI5LjkyMlYzLjcwMkM0Ni45NjEsMy4yOCw0Ni42MTgsMi45MzgsNDYuMTk2LDIuOTM4eiI+PC9wYXRoPjwvc3ZnPg==");
       width: 25px;
    height: 25px;
    background-size: cover;

`;
const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div className="col-sm-12 col-lg-6 row text-center mx-auto pl-0 ml-0 mt-4 mb-4">
        <div className="col-4 col-sm-4 d-flex my-auto text-center align-middle w-100">
          <NavLink
            className={
              "mx-auto p-0 " + classnames({ active: activeTab === "1" })
            }
            onClick={() => {
              toggle("1");
            }}
          >
            <div className="mx-auto d-flex">
              <IconProfile />
              <span className="my-auto">Profile</span>
            </div>
          </NavLink>
        </div>
        <div className="col-4 col-sm-4 d-flex my-auto text-center align-middle w-100 border-right border-left">
          <NavLink
            className={
              "mx-auto p-0 " + classnames({ active: activeTab === "2" })
            }
            onClick={() => {
              toggle("2");
            }}
          >
            <div className="mx-auto d-flex">
              <IconReview />
              <span className="my-auto">Reviews</span>
            </div>
          </NavLink>
        </div>
        <div className="col-4 col-sm-4 d-flex my-auto text-center align-middle w-100 ">
          <NavLink
            className={
              "mx-auto p-0 " + classnames({ active: activeTab === "3" })
            }
            onClick={() => {
              toggle("3");
            }}
          >
            <div className="mx-auto d-flex">
              <IconSaved />
              <span className="my-auto">Saved Movie</span>
            </div>
          </NavLink>
        </div>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="6" className="mx-auto">
              <table
                className="table"
                style={{color: "inherit"}}
              >
                <tbody>
                  <td className="">
                    <tr>Nama</tr>
                    <tr>Email</tr>
                    <tr>Password</tr>
                  </td>
                  <td className="">
                    <tr>: Sulistyo Ardani</tr>
                    <tr>: ardani@gmail.com</tr>
                    <tr>: ********</tr>
                  </td>
                </tbody>
              </table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6" className="mx-auto">
            "tes"
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;