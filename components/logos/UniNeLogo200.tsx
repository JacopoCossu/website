import Image from 'next/image';
import img from '../../public/logo-unine.png';

export const UniNe200 = () => (
  <Image
    src={img}
    placeholder="blur"
    width={200}
    height={200}
    objectFit={'scale-down'}
    alt="University of Neuchâtel" />
);
