import { AboutMe } from "../../components/About/AboutMe";
import { CipherMap } from "../../components/CipherMap/CipherMap";
import { Interests } from "../../components/Interests/Interests";
import { NavBar } from "../../components/NavBar/NavBar";
import { Password } from "../../components/Password/Password";
import { ProfessionalInfo } from "../../components/ProfessionalInfo/ProfessionalInfo";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserSocialMedia } from "../../components/UserSocialMedia/UserSocialMedia";
import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <UserInfo />
      <AboutMe />

      <CipherMap />

      <UserSocialMedia />
      <ProfessionalInfo />
      <Password />
      <Interests />
    </div>
  );
}
