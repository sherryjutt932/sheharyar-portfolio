import Link from 'next/link';

export default function StickyIcon(props) {

  return (
    <Link href="#">
          {props.icon}
      </Link>
  );
}
