import React from 'react';

export default function Tag({ text, bColor }) {
  return (
    <div style={{ display:"inline-block",padding: "0 2px", height: 20, lineHeight: "18px", fontSize: 12, fontWight: 500, color: "#fff", background: bColor }} >
      {text}
    </div>
  )
}
