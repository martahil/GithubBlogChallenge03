import { AvatarImg, Bio, Company, Followers, Github, Info, Loading, MainInfo, Name, NameAndGithub, ProfileContainer, ProfileContent, Username } from "./styles";
import usernameIcon from '../../assets/username-icon.svg'
import companyIcon from '../../assets/company-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import { ArrowSquareOut } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)

  return (
    <>
      <ProfileContainer>
        <ProfileContent key={user?.login}>
          {!user ? (
            <Loading>Loading profile info...</Loading>
          ) : (
            <>
              <AvatarImg>
                <img src={user.avatar_url} />
              </AvatarImg>

              <MainInfo>
                <NameAndGithub>
                  <Name>{user.name}</Name>

                  <Github as="a" href={user.html_url} target="_blank" rel="noopener noreferrer">
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
                    {user.followers === 1 || user.followers === 0 ? `${user.followers} follower` : `${user.followers} followers`}
                  </Followers>
                </Info>
              </MainInfo>
            </>
          )}
        </ProfileContent>
      </ProfileContainer>
    </>
  )
}