export default function Footer() {
  return (
    <div className="  px-[15%] pt-12  pb-2 border-t-4 border-[#333] text-[#777]">
      <h2 className="text-lg font-[400] mb-8 ">
        Questions? Call <span className="underline">000-000-000-0000</span>
      </h2>

      <div className="items-start py-5 px-0 flex sm:flex-wrap ">
        <div className="basis-1/4 flex-grow mb-5 flex flex-col gap-2">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="basis-1/4 flex-grow mb-5 flex flex-col gap-2">
          <a href="#">Help Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="basis-1/4 flex-grow mb-5 flex flex-col gap-2">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="basis-1/4 flex-grow mb-5 flex flex-col gap-2">
          <a href="#">Media Centre</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <p className="copyright-text">Netflix India</p>
    </div>
  );
}
