import SearchFiled from "./search";

import "../../styles/global/nav.css";

import Image from 'next/image'

export default function Nav() {
    return (
        <nav>
            <div className="shell headerNavContainer">
                <div className="logoWrapper">
                    <Image width={227} height={38}
                        src="/NEWSLETTER.svg" alt="" />
                </div>
                <SearchFiled />
            </div>
        </nav>
    )
  }
  