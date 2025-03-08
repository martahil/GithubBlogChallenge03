import { AvatarImg, Bio, Company, Followers, Github, Info, MainInfo, Name, NameAndGithub, ProfileContainer, ProfileContent, Username } from "./styles";
import usernameIcon from '../../assets/username-icon.svg'
import companyIcon from '../../assets/company-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import { ArrowSquareOut } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ProfileContainer>
        <ProfileContent key={user.login}>
          <AvatarImg>
            <img src={user.avatar_url} />
          </AvatarImg>

          <MainInfo>
            <NameAndGithub>
              <Name>{user.name}</Name>

              <Github>
                <label>GITHUB</label>
                <ArrowSquareOut size={12} />
              </Github>
            </NameAndGithub>

            <Bio>{user.bio}</Bio>

            <Info>
              <Username>
                <img src={usernameIcon} />
                <span>{user.login}</span>
              </Username>
              <Company>
                <img src={companyIcon} />
                <span>{user.company}</span>
              </Company>
              <Followers>
                <img src={followersIcon} />
                <span>{user.followers} followers</span>
              </Followers>
            </Info>
          </MainInfo>
        </ProfileContent>
      </ProfileContainer>
    </>
  )
}