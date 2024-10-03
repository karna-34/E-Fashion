import React from 'react';
import Boy from '../Boy/boy';
import Popular from '../Popular/Popular';
import Offer from '../offer/Offer';
import Newcollection from "../Newcollection/Newcollection"
// import Newsletter from "../Newletter/Newsletter5"


export default function Shop() {
  return (
    <div>
      <Boy/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      {/* <Newsletter/>       */}
    </div>
  )
}
