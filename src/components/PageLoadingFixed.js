import React from 'react';

import './Styles/PageLoadingFixed.css';

function PageLoadingFixed () {
  return (
    <div className="PageLoading">
      <div class="lds-roller"><div /><div /><div /></div>
    </div>
  );
}

export default PageLoadingFixed;
