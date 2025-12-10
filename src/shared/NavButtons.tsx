import React from "react";

export default function NavButtons({ onPrev, onNext, onSubmit, isLast }: any) {
  return (
    <div className="flex gap-3 items-center">
      <button className="nav-pill" onClick={onPrev}>←</button>
      {isLast ? (
        <button className="btn-primary" onClick={onSubmit}>Submit</button>
      ) : (
        <button className="btn-primary" onClick={onNext}>→</button>
      )}
    </div>
  );
}

