import Link from "next/link";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../components/Layout";

const TermsOfUse = () => {
  return (
    <Layout>
      <div className="h-full px-5 mx-auto mt-10 space-y-10 py-14 md:px-0 md:w-4/5 lg:w-3/5">
        <Breadcrumbs>
          <Link href="/">
            <a>Home</a>
          </Link>

          <p>Terms Of Use</p>
        </Breadcrumbs>

        <div className="space-y-5 text-gray-600">
          <Fade distance="40px" duration={1500} left>
            <p>
              Your access to and use of this website is subject to the following
              terms and conditions and all applicable laws. By accessing and
              using this website, you accept the following terms and conditions,
              without limitation or qualification.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              Unless otherwise stated, the contents of this website including,
              but not limited to, the text and images contained herein and their
              arrangement are the property of URIKA Research. All trademarks
              used or referred to in this website are the property of their
              respective owners.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              Nothing contained in this website shall be construed as conferring
              by implication, estoppels, or otherwise, any license or right to
              any copyright, patent, trademark or other proprietary interest of
              URIKA Research or any third party. This website and the content
              provided in this website, including, but not limited to, graphic
              images, audio, video, html code, buttons, and text, may not be
              copied, reproduced, republished, uploaded, posted, transmitted, or
              distributed in any way, without the prior written consent of URIKA
              Research, except that you may download, display, and print one
              copy of the materials on any single computer solely for your
              personal, non-commercial use, provided that you do not modify the
              material in any way and you keep intact all copyright, trademark,
              and other proprietary notices.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              The information provided on this website is free of charge and for
              informational purposes only and does not create a business or
              professional services relationship between you and URIKA Research.
              Links on this website may lead to services or websites not
              operated by URIKA Research. No judgment or warranty is made with
              respect to such other services or websites and URIKA Research
              takes no responsibility for such other websites or services. A
              link to another website or service is not an endorsement of that
              website or service. Any use you make of the information provided
              on this website, or any website or service linked to by this
              website, is at your own risk.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              This website and its contents are provided "as is" and URIKA
              Research makes no representation or warranty of any kind with
              respect to this website or any website or service accessible
              through this website. URIKA Research expressly disclaims all
              express and implied warranties including, but not limited to, the
              implied warranties of merchantability, fitness for a particular
              purpose, title, and non-infringement. In no event will URIKA
              Research be liable to any party for any direct, indirect,
              incidental, special, exemplary, consequential, or other damages
              (including, but not limited to, lost profits, business
              interruption, loss of programs or data) without regard to the form
              of action and whether in contract, tort, negligence, strict
              liability, or otherwise, arising out of or in connection with this
              website, any content on or accessed through this website or any
              website service linked to, or any copying, displaying, or use
              thereof.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              URIKA Research operates in Ghana and you agree that these terms of
              use and any legal action or proceeding relating to this website
              shall be governed by the laws of Ghana without reference to its
              choice of law rules. If you attempt to bring any legal proceedings
              against URIKA Research you specifically acknowledge that URIKA
              Research is free to choose the jurisdiction of our preference as
              to where such action against us may be held. As you have agreed by
              using this website to choose the laws of Ghana to govern any such
              proceedings, we will probably choose to defend any such action in
              Ghana and we can make this decision entirely as it suits us,
              without regard to where in the world you are located, or from
              where in the world you viewd this website.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              You are responsible for complying with the laws of the
              jurisdiction from which you are accessing this website and you
              agree that you will not access or use the information on this
              website in violation of such laws. Unless expressly stated
              otherwise herein, any information submitted by you through this
              website shall be deemed non-confidential and non-proprietary. You
              represent that you have the lawful right to submit such
              information and agree that you will not submit any information
              unless you are legally entitled to do so. Because of the open
              nature of the Internet, we recommend that you not submit
              information you consider confidential.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              URIKA Research does not accept unauthorized idea submissions
              outside of established business relationships. To protect the
              interests of our current clients and ourselves, we must treat the
              issue of such submissions with great care. Importantly, without a
              clear business relationship, URIKA Research cannot and does not
              treat any such submissions in confidence. Any ideas disclosed to
              URIKA Research outside a pre-existing and documented confidential
              business relationship are not confidential and URIKA Research may
              therefore develop, use and freely disclose or publish similar
              ideas without compensating you or accounting to you.
            </p>
          </Fade>

          <Fade distance="40px" duration={1500} left>
            <p>
              By using this website you agree to be bound by the terms of this
              stated policy.
            </p>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUse;
