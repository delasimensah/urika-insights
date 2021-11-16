import Link from "next/link";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="h-full px-5 mx-auto mt-10 space-y-10 py-14 md:px-0 md:w-4/5 lg:w-3/5">
        <Breadcrumbs>
          <Link href="/">
            <a>Home</a>
          </Link>

          <p>Privacy Policy</p>
        </Breadcrumbs>

        <div className="space-y-10 text-gray-600">
          <Fade distance="40px" duration={1500} left>
            <p>
              This website is administered by URIKA Insights. The primary
              purpose of this website is to disseminate information about URIKA
              Insights and its services to the public. URIKA Insights regards
              your privacy as very important and we want you to feel secure when
              visiting our website. Any personal information you give us is only
              used for the purposes for which you provide it; e.g. your email
              address will only be used to send information you specifically
              requested. The following gives an overview of how we protect your
              privacy when you browse our website.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">
                Information We Collect and How We Use It{" "}
              </h1>

              <div className="space-y-3">
                <p>
                  We do not collect personally identifying information at this
                  site from users unless it is provided to us knowingly and
                  voluntarily. In certain parts of the site, you may communicate
                  with us via an online form and/or by e-mail. Through these
                  channels, you may disclose limited personal information to us,
                  such as your name, title, address, company, telephone/fax
                  numbers, email address and certain other information which
                  will enable us to respond to your inquiries about our
                  services, career opportunities, etc. and/or to your request to
                  receive periodic communications from us. When you voluntarily
                  submit personal information via this website for any of these
                  purposes, we will use the personal information you provide in
                  accordance with the purpose for which it was submitted. Though
                  you are under no obligation to provide us with this
                  information, withholding it may prevent us from responding to
                  your inquiry. When you provide any personal information to us
                  through this website, you acknowledge that you are knowingly
                  and voluntarily consenting to its use as described in this
                  Privacy Policy.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">
                Cookies and Usage Tracking Information{" "}
              </h1>

              <div className="space-y-3">
                <p>
                  Like many companies, we use "cookie" technology on our site.
                  The cookies we use do not collect any personally identifying
                  information about you or provide us with any way to contact
                  you, nor do they extract any unrelated information about your
                  computer. These cookies may tell us whether you are a new or
                  previous visitor, as well as what material you have viewed. We
                  also collect certain usage information about our site, such as
                  the number and frequency of visitors to its various sections,
                  which may be used for the general purpose of improving our
                  website. Collected data is used only in the aggregate and does
                  not include any personally identifying information.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">
                Use of Personal Information by Third Parties{" "}
              </h1>

              <div className="space-y-3">
                <p>
                  We occasionally hire other companies to provide limited
                  services on our behalf, such as hosting websites, processing
                  data, or performing statistical analysis of our data. Those
                  companies will be permitted to obtain only the personal
                  information they need to deliver the service; and will be
                  required to maintain the confidentiality of the information;
                  and are prohibited from using it for any other purpose.
                </p>

                <p>
                  URIKA Insights may disclose personally identifying information
                  collected on this website if we believe such action is
                  required by law or desirable to permit us to exercise our
                  legal rights or take action regarding illegal activities, or
                  if we have a good faith belief that you are in violation of
                  the terms of service. Should there be a change in control of
                  URIKA Insights or all or part of the company is sold, merged,
                  or otherwise transferred to another entity, we may transfer
                  personally identifying information as part of that
                  transaction.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">Security </h1>

              <div className="space-y-3">
                <p>
                  We take reasonable technical and organizational precautions to
                  prevent the loss, misuse or alteration of your personal
                  information. However, as information transmission over the
                  internet is inherently insecure, we cannot guarantee the
                  security of data sent over the internet.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">Contact Us </h1>

              <div className="space-y-3">
                <p>
                  Questions regarding this Policy and related privacy issues
                  should be directed to URIKA Insights by sending an e-mail to
                  info@urikainsights.com with the subject line "privacy," along
                  with a thorough description of your concern.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">
                Conditions of Use and Your Consent{" "}
              </h1>

              <div className="space-y-5">
                <p>
                  When you use this site, you consent to the transmission of
                  personally identifying information and to its use as described
                  herein. As this website may be hosted outside your geographic
                  region, any email communications or communications you send us
                  through this website may be directed to a server that is not
                  located within your home country. Regardless of your
                  geographic location, use of our website and any dispute over
                  privacy is subject to this Policy and application of the laws
                  in Ghana.
                </p>
              </div>
            </div>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <div className="space-y-4">
              <h1 className="text-lg text-black">
                Changes to This Online Privacy Policy{" "}
              </h1>

              <div className="space-y-5">
                <p>
                  If we make a material change to this policy or to our privacy
                  practices, we will post an updated Policy either at this
                  location or elsewhere on our website in a prominent location.
                  The updated Policy will reflect the date of the last revision.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
