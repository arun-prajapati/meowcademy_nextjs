import { MdOutlineWhatsapp } from "react-icons/md";

const Footer2 = () => {
  return (
    <section className="container  bg-cta-bg bg-no-repeat  bg-center  bg-contain mt-12 flex items-center flex-col gap-5 justify-center p-10 md:p-16 ">
      <h3 className=" max-w-xl text-2xl md:text-4xl font-bold text-center">
        Ready to power up your child&apos;s academic success?
      </h3>

      <a
        href="https://wa.me/+6587713358"
        className="button flex items-center gap-4 my-5"
      >
        <MdOutlineWhatsapp size={24} />
        Chat with us
      </a>
    </section>
  );
};

export default Footer2;
