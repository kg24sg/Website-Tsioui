import { width } from '@mui/system';
import React from 'react';

export default function Footer() {
  const hrStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingLeft: '10%',
  };
  return (
    <footer class="brown-color">
      <div
        class=" brown-color"
        style={{ flex: 1, height: '3px', backgroundColor: 'white' }}
      />{' '}
      <div class="footer-basic brown-color">
        <footer class="brown-color">
          <div class="social brown-color">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Company Name © 2023</p>
        </footer>
      </div>
    </footer>
  );
}
