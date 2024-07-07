'use client';
import Spline from '@splinetool/react-spline';
import './footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <h1>Thank you for your curiosity</h1>
      <div className="Footer-content">
        <div className="Footer-left">
          <p>code by linh nguyen</p>
        </div>
        <div className="Footer-right">
          <a href="https://www.linkedin.com/in/kalin-nguyen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/linhnguyen96" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="https://drive.google.com/file/d/1MDmnQ7eSvOJXNBOcgZrHv1A7ke6vEFOp/view" target="_blank" rel="noopener noreferrer">Résumé</a>
        </div>
      </div>
    </div>
  );
}