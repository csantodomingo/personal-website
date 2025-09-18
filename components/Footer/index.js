import Socials from "../Socials";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact me!</h1>
          <div className="mt-2">✉ csant@live.com
            <div className="mt-2">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by Clara Santodomingo
      </h1>
    </>
  );
};

export default Footer;
