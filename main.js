const LinksSocialMedia = {
  github: 'GeovanneLima',
  youtube: 'channel/UC3u0MmnaS6vJqT3jP-hO26g',
  instagram: 'geovanne.bl',
  facebook: 'geovanne.brasil',
  twitter: 'GeovanneLima19'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
