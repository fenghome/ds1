import React from 'react';
import { Icon } from 'antd';

function CusServiceSvg() {
  return (
    <svg viewBox="0 0 1024 1024" width="31px" height="26px" fill="currentColor">
      <path d="M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z" p-id="2726" fill="#ffffff"></path>
    </svg>
  )
}

export default function CusServiceIcon(props) {
  return (
    <Icon component={CusServiceSvg} {...props} />
  )
}
