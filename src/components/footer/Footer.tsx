import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
   <> 
    <footer className=" border-t border-[#EEEEEE] mt-4 mb-10">
        <div className=" text-center container  flex flex-col items-center gap-6 pt-28 pb-14">
          <div className=" text-left">
         
            <Link
              href="/"
              
              className="cursor-pointer flex items-center "
            >
              <Image
                src={'/meowLogo.png'}
                width={59}
                height={59}
                quality={100}
                alt="Meow Academy"
                className=" w-[59px] h-[59px] rounded-full object-cover "
              />
              <span className="hidden md:block text-[22px] font-bold text-primaryBlue  leading-5">
             
                meow
                <span className="text-[#c6341d]">
                
                  <br />
                  cademy
                </span>
              </span>
            </Link>
          </div>
          <p>
            Meowcademy is a market leader in tuition <br /> and enrichment in
            Singapore
          </p>

          <p className="text-[#74C3BE]">© 2024 Meowcademy Education Pte Ltd.</p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/meowcademy_sg?igsh=bDU3MzNmbGU0ZWFu&utm_source=qr"
              target="blank"
              className="bg-[#F0F3F6] flex items-center justify-center p-3 transition-all duration-[0.5s]  rounded-lg text-primaryBlue hover:bg-primaryBlue hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_396_6636)">
                  <path
                    d="M12 2.49512C14.717 2.49512 15.056 2.50512 16.122 2.55512C17.187 2.60512 17.912 2.77212 18.55 3.02012C19.21 3.27412 19.766 3.61812 20.322 4.17312C20.8305 4.67301 21.224 5.27771 21.475 5.94512C21.722 6.58212 21.89 7.30812 21.94 8.37312C21.987 9.43912 22 9.77812 22 12.4951C22 15.2121 21.99 15.5511 21.94 16.6171C21.89 17.6821 21.722 18.4071 21.475 19.0451C21.2247 19.7129 20.8311 20.3177 20.322 20.8171C19.822 21.3254 19.2173 21.7189 18.55 21.9701C17.913 22.2171 17.187 22.3851 16.122 22.4351C15.056 22.4821 14.717 22.4951 12 22.4951C9.283 22.4951 8.944 22.4851 7.878 22.4351C6.813 22.3851 6.088 22.2171 5.45 21.9701C4.78233 21.7196 4.17753 21.3261 3.678 20.8171C3.16941 20.3173 2.77593 19.7126 2.525 19.0451C2.277 18.4081 2.11 17.6821 2.06 16.6171C2.013 15.5511 2 15.2121 2 12.4951C2 9.77812 2.01 9.43912 2.06 8.37312C2.11 7.30712 2.277 6.58312 2.525 5.94512C2.77524 5.2773 3.1688 4.67244 3.678 4.17312C4.17767 3.66435 4.78243 3.27085 5.45 3.02012C6.088 2.77212 6.812 2.60512 7.878 2.55512C8.944 2.50812 9.283 2.49512 12 2.49512ZM12 7.49512C10.6739 7.49512 9.40215 8.0219 8.46447 8.95958C7.52678 9.89727 7 11.169 7 12.4951C7 13.8212 7.52678 15.093 8.46447 16.0307C9.40215 16.9683 10.6739 17.4951 12 17.4951C13.3261 17.4951 14.5979 16.9683 15.5355 16.0307C16.4732 15.093 17 13.8212 17 12.4951C17 11.169 16.4732 9.89727 15.5355 8.95958C14.5979 8.0219 13.3261 7.49512 12 7.49512V7.49512ZM18.5 7.24512C18.5 6.9136 18.3683 6.59565 18.1339 6.36123C17.8995 6.12681 17.5815 5.99512 17.25 5.99512C16.9185 5.99512 16.6005 6.12681 16.3661 6.36123C16.1317 6.59565 16 6.9136 16 7.24512C16 7.57664 16.1317 7.89458 16.3661 8.129C16.6005 8.36342 16.9185 8.49512 17.25 8.49512C17.5815 8.49512 17.8995 8.36342 18.1339 8.129C18.3683 7.89458 18.5 7.57664 18.5 7.24512ZM12 9.49512C12.7956 9.49512 13.5587 9.81119 14.1213 10.3738C14.6839 10.9364 15 11.6995 15 12.4951C15 13.2908 14.6839 14.0538 14.1213 14.6164C13.5587 15.179 12.7956 15.4951 12 15.4951C11.2044 15.4951 10.4413 15.179 9.87868 14.6164C9.31607 14.0538 9 13.2908 9 12.4951C9 11.6995 9.31607 10.9364 9.87868 10.3738C10.4413 9.81119 11.2044 9.49512 12 9.49512V9.49512Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_396_6636">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.495117)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@meowcademy_sg?_t=8mYqMHvE65v&_r=1"
              target="blank"
              className="bg-[#F0F3F6] flex items-center justify-center p-3 transition-all duration-[0.5s]  rounded-lg text-primaryBlue hover:bg-primaryBlue hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100089105940166&sk=about"
              target="blank"
              className="bg-[#F0F3F6] flex items-center justify-center p-3 transition-all duration-[0.5s]  rounded-lg text-primaryBlue hover:bg-primaryBlue hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_396_6632)">
                  <path
                    d="M12 2.49512C6.477 2.49512 2 6.97212 2 12.4951C2 17.4861 5.657 21.6231 10.438 22.3741V15.3851H7.898V12.4951H10.438V10.2921C10.438 7.78612 11.93 6.40212 14.215 6.40212C15.309 6.40212 16.453 6.59712 16.453 6.59712V9.05712H15.193C13.95 9.05712 13.563 9.82812 13.563 10.6191V12.4951H16.336L15.893 15.3851H13.563V22.3741C18.343 21.6241 22 17.4851 22 12.4951C22 6.97212 17.523 2.49512 12 2.49512Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_396_6632">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.495117)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 mt-7">
            <Link
            
              href="/privacy-policy"
              className="cursor-pointer text-primaryBlue font-bold hover:text-[#74C3BE]"
            >
              Privacy Policy
            </Link>
            <Link
            
              href="/terms-and-conditions"
              className="cursor-pointer text-primaryBlue font-bold hover:text-[#74C3BE]"
            >
              Terms & Condition
            </Link>
            <Link
             
              href="/faq"
              className="cursor-pointer text-primaryBlue font-bold hover:text-[#74C3BE]"
            >
              FAQs
            </Link>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer
