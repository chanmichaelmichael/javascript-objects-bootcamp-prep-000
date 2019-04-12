var playlist = {artist: ["One"], title: ["One song"]}
//artist, title pair not necessarily lined updatePlaylist

function updatePlaylist(playlist,name,title){
  playlist.artist.push(name);
  playlist.title.push(title);
  return playlist;
}

function removeFromPlaylist(plat, name){
  
}