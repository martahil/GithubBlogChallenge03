import { Bio, Company, Followers, Github, Info, MainInfo, Name, NameAndHithub, ProfileContainer, ProfileContent, Username } from "./styles";
import profileAvatar from '../../assets/profile-avatar.svg'
import usernameIcon from '../../assets/username-icon.svg'
import companyIcon from '../../assets/company-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import { ArrowSquareOut } from "phosphor-react";

export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfileContent>
          <img src={profileAvatar} />

          <MainInfo>
            <NameAndHithub>
              <Name>Cameron Williamson</Name>

              <Github>
                <label>GITHUB</label>
                <ArrowSquareOut size={12} />
              </Github>
            </NameAndHithub>

            <Bio>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</Bio>

            <Info>
              <Username>
                <img src={usernameIcon} />
                <span>cameronwll</span>
              </Username>
              <Company>
                <img src={companyIcon} />
                <span>Rocketseat</span>
              </Company>
              <Followers>
                <img src={followersIcon} />
                <span>32 followers</span>
              </Followers>
            </Info>
          </MainInfo>
        </ProfileContent>
      </ProfileContainer>
    </>
  )
}