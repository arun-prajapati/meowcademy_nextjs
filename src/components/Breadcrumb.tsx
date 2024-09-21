import { BreadCrumbType } from "@/types/type"
import Link from "next/link"

const Breadcrumb = ({ menu, submenu, redirect}:BreadCrumbType) => {
    let stdtitle = menu.replace(/\s+/g, "-").toLowerCase();

    return (
    <>
     <div className=" breadcrumbs  border-y border-[#EEEEEE] py-7">
                <div className="container">
                    <ul className="flex items-center md:gap-3 ">
                        <Link href="/">

                            <li className="text-[#74C3BE]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    id="img"
                                >
                                    <g clipPath="url(#clip0_396_5804)">
                                        <path
                                            d="M13 19H19V9.978L12 4.534L5 9.978V19H11V13H13V19ZM21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.49C2.99989 9.33761 3.03462 9.18721 3.10152 9.0503C3.16841 8.91338 3.26572 8.79356 3.386 8.7L11.386 2.478C11.5615 2.34144 11.7776 2.2673 12 2.2673C12.2224 2.2673 12.4385 2.34144 12.614 2.478L20.614 8.7C20.7343 8.79356 20.8316 8.91338 20.8985 9.0503C20.9654 9.18721 21.0001 9.33761 21 9.49V20Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_396_5804">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </Link>
                        <li className=" font-extrabold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_396_5785)">
                                    <path
                                        d="M12.172 12L9.34302 9.17199L10.757 7.75699L15 12L10.757 16.243L9.34302 14.828L12.172 12Z"
                                        fill="#74C3BE"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_396_5785">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>

                        <li className="text-[#74C3BE] font-semibold text-sm md:text-[16px]">
                            {redirect ? <Link href={`/${redirect}/${stdtitle}`}>{menu}</Link> : <Link href={`/${stdtitle}`}>{menu}</Link>}


                        </li>

                        {submenu && <li className=" font-extrabold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_396_5785)">
                                    <path
                                        d="M12.172 12L9.34302 9.17199L10.757 7.75699L15 12L10.757 16.243L9.34302 14.828L12.172 12Z"
                                        fill="#74C3BE"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_396_5785">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        }
                        <li className="font-semibold text-sm md:text-[16px]"> {submenu} </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default Breadcrumb
