import React from "react"
import { ProfileStyle, User, Description } from "../../styles"
import { Record } from "immutable"

const Profile = ({profile}) => {
	const { user, userDescription } = profile;

	return (
		<ProfileStyle>
			<User>{user}</User>
			<Description>{userDescription}</Description>
		</ProfileStyle>
	);
}

export default Profile;