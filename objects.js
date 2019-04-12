var playlist = {One, "One song"}
//artist, title pair not necessarily lined updatePlaylist

function updatePlaylist(playlist,name,title){
  playlist.artist.push(name);
  playlist.title.push(title);
  return playlist;
}

function removeFromPlaylist(playlist, name){
  
}