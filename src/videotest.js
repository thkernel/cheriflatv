export default function App() {
    // ... (other code)
  
    const [secondVideoUri, setSecondVideoUri] = React.useState('YOUR_SECOND_VIDEO_URI_HERE');
    const [shouldPlaySecondVideo, setShouldPlaySecondVideo] = React.useState(false);
  
    // ... (other code)
  
    return (
      <View style={styles.container}>
        <PagerView style={styles.container} initialPage={0}>
          <View style={styles.page} key="1">
            {isFullScreen ? null : <Avatar />}
            
            <Video
              ref={video}
              style={[isFullScreen ? styles.videoPaysage : styles.videoPortrait]}
              source={{ uri: 'http://cheriflatv.ml:8080/live/CheriflaTV/audio.m3u8' }}
              resizeMode="contain"
              useNativeControls={true}
              isLooping={false}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              shouldPlay={shouldPlaySecondVideo ? shouldPlaySecondVideo : isPlaying}
              onPlaybackStatusUpdate={(status) => {
                setStatus(() => status);
                setIsPlaying(status.isPlaying);
  
                // Check if the first video has an error or is not playing, then play the second one
                if (!status.isPlaying && !status.isBuffering && !status.didJustFinish && !shouldPlaySecondVideo) {
                  setShouldPlaySecondVideo(true);
                }
              }}
              onFullscreenUpdate={({ fullscreenUpdate }) => {
                setIsFullScreen(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT);
              }}
            />
  
            <View style={styles.container2}>
              {/* ... (other buttons) */}
  
              <Pressable style={styles.buttons} onPress={reloadApp}>
                <Text style={styles.buttonsTitle}>{"    RELOAD"}</Text>
              </Pressable>
  
              {/* ... (other buttons) */}
            </View>
          </View>
  
          <View style={styles.page} key="2">
            <Apropos />
          </View>
        </PagerView>
      </View>
    );
  }
  