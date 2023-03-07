import React from "react";
import ContentLoader from "react-content-loader";

const BurgerSkeleton = (props) => (
  <ContentLoader
    className='burger-block'
    speed={2}
    width={280}
    height={370}
    viewBox='0 0 280 370'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='150' y='140' rx='0' ry='0' width='0' height='1' />
    <rect x='0' y='0' rx='20' ry='20' width='270' height='175' />
    <rect x='134' y='131' rx='0' ry='0' width='0' height='1' />
    <rect x='3' y='185' rx='10' ry='10' width='265' height='30' />
    <rect x='6' y='229' rx='10' ry='10' width='260' height='55' />
    <rect x='6' y='297' rx='10' ry='10' width='90' height='45' />
    <rect x='114' y='296' rx='10' ry='10' width='152' height='45' />
  </ContentLoader>
);

export default BurgerSkeleton;
