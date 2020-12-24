import React from 'react';
import { Media } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentReview = () => {
  return (
    <div className="comment-review">
      <Media>
        <Media className="favourite-image" left top href="#">
          <img src="https://akcdn.detik.net.id/customthumb/2007/10/22/73/Kaka-ko.jpg?w=700&q=80" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Cara membuat tahu
          </Media>
          Secara garis besar langkah-langkah dalam proses pembuatan tahu yaitu: Lakukan proses pemilihan bahan baku tahu, usahakan yang memiliki kualitas bagus. Proses penyortiran biasanya dilakukan menggunakan tampi/tampah. Kedelai selanjutnya dicuci, kemudian direndam dalam air hangat kurang lebih selama 6 sampai 12 jam.
        </Media>
      </Media>
      <br />
      <Media className="mt-1 favourite-image">
        <Media left middle href="#">
          <img src="https://akcdn.detik.net.id/customthumb/2007/10/22/73/Kaka-ko.jpg?w=700&q=80" alt="Generic placeholder image" />
        </Media>
        <br />
        <Media body>
          <Media heading>
            Apa itu React.js ?
          </Media>
          React Js adalah sebuah library JavaScript yang di buat oleh facebook. React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen.
        </Media>
      </Media>
      <br />
      <Media className="mt-1 favourite-image">
        <Media left bottom href="#">
          <img src="https://akcdn.detik.net.id/customthumb/2007/10/22/73/Kaka-ko.jpg?w=700&q=80" alt="Generic placeholder image" />
        </Media>
        <br />
        <Media body>
          <Media heading>
            Angela Yu
          </Media>
          <p>Angela Yu is a medical doctor, iOS developer, and founder of the London App Brewery.</p>
          <p>A practicing doctor at the National Health Service, Angela also has found the time to teach over 250,000 students how to code. It is her mission at the London App Brewery to change lives by transforming students into developers. Companies such as Twitter, Facebook, and Google have invited Angela to teach their employees, and she has reached hundreds of thousands more through her online classes. In addition, Angela is an international public speaker specializing in topics including female entrepreneurship, innovation policy, and the future of medical technology.</p>
        </Media>
      </Media>
    </div>
  );
};

export default CommentReview;

