const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
              const output = [];
              const libraryValue = Object.values(this);
              const playListsBox = libraryValue[1];
              for (const parts in playListsBox){
                     const playList = playListsBox[parts];
                     const tracks = playList.tracks;
                     output.push(`${playList.id}: ${playList.name} - ${tracks.length} tracks`);
              }
              return output.join('\n');
       },
  printTracks: function () {
                     const libraryValue = Object.values(this);
                     const output = [];
                     const tracksBox = libraryValue[0];
                     for (const parts in tracksBox){
                            const track = tracksBox[parts];
                            output.push(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
                     }
                     return output.join('\n');
              },
  printPlaylist: function (playlistId) {
                     const output = [];
                     let trackList;
                     const libraryValue = Object.values(this);
                     const playListBox = libraryValue[1];
                     const tracksBox = libraryValue[0];
                     for (const parts in playListBox){
                            const playList = playListBox[parts];
                            if (playList.id === playlistId){
                                   trackList = playList.tracks;
                                   trackList.length < 2 ? output.push(`${playList.id}: ${playList.name} - ${trackList.length} track`) 
                                   : output.push(`${playList.id}: ${playList.name} - ${trackList.length} tracks`);
                            }
                     }
                     for (const parts in tracksBox){
                            const track = tracksBox[parts];
                            if (trackList.includes(track.id)){
                                   output.push(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
                            }
                     
                     }
                     return output.join('\n');
                     
              },
  addTrackToPlaylist: function (trackId, playlistId) {
                     const libraryValue = Object.values(this);
                     const tracksBox = libraryValue[0];
                     const playListBox = libraryValue[1];
                     let addTrack;
                     for (const parts in tracksBox){
                            const track = tracksBox[parts];
                            if (track.id === trackId){
                                   addTrack = track.id;
                            }
                     }
                     for (const parts in playListBox){
                            const playList = playListBox[parts];
                            if (playList.id === playlistId){
                                   playList.tracks.push(addTrack);
                            }
                     }
                     return playListBox;
              },
  generateUid: function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
  addTrack: function (name, artist, album) {
              const trackObj = { id: this.generateUid(), name: name, artist: artist, album: album };
              const libraryValue = Object.values(this);
              const tracksBox = libraryValue[0];
              let trackNum = this.tracksInLibrary(tracksBox);
              tracksBox[trackNum] = trackObj;
              return tracksBox;
       },
  tracksInLibrary: function(tracksBox) {
              let num = 1;
              for (const tracks in tracksBox){
                     num++
              }
              num < 10 ? num = `t0${num}` : num = `t${num}`;
              return num;
       },
  addPlaylist: function (name) {
              const playList0bj = {id: this.generateUid(), name:name, tracks:[]}
              const libraryValue = Object.values(this);
              const playListBox = libraryValue[1];
              let playListNum = this.playListsInLibrary(playListBox);
              playListBox[playListNum] = playList0bj;
              return playListBox;
       },
  playListsInLibrary: function (playListsBox) {
              let num = 1;
              for (const playList in playListsBox){
                     num++
              }
              num < 10 ? num = `p0${num}` : num = `p${num}`;
              return num;
       }
};


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//console.log(library.printPlaylists());


// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

//console.log(library.printTracks());

// // // prints a list of tracks for a given playlist, using the following format:
// // // p01: Coding Music - 2 tracks
// // // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // // t02: Model View Controller by James Dempsey (WWDC 2003)

// console.log(library.printPlaylist('p01'));
// console.log('------')
// console.log(library.printPlaylist('p02'));


// // // adds an existing track to an existing playlist

// console.log(library.addTrackToPlaylist('t03','p01'));
// console.table(library.playlists);
// console.log('------')
// console.log(library.addTrackToPlaylist('t02','p02'));
// console.table(library.playlists);

// // // generates a unique id
// // // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }

// //adds a track to the library

// console.table(library.addTrack('Doritos & Fritos','100 Gecs','10,000 Gecs'));

// // adds a playlist to the library

//console.table(library.addPlaylist('Bananas'));



// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }