import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShowProduct() {
  const params = useParams();
  const { slug } = params;
  return (
    <>
      <div>
        <main className="main-products">
          <h1>{slug}</h1>htrhtyhyh
        </main>
      </div>
    </>
  );
}
