import { TouchBar, nativeImage, NativeImage } from 'electron';

const { TouchBarButton, TouchBarSegmentedControl, TouchBarSpacer } = TouchBar;

const genNativeImage = (name: string): NativeImage => {
  return nativeImage.createFromPath(`assets/touchbar/${name}.png`);
};

const previousVideo = new TouchBarButton({
  accessibilityLabel: 'Previous Video',
  label: '􀆇', // chevron.up
});

const nextVideo = new TouchBarButton({
  accessibilityLabel: 'Next Video',
  label: '􀆈', // chevron.down
});

const videoControls = new TouchBarSegmentedControl({
  segmentStyle: 'separated',
  mode: 'buttons',
  segments: [previousVideo, nextVideo],
});

let videoIsLiked = false;

const likeVideo = new TouchBarButton({
  accessibilityLabel: videoIsLiked ? 'Unlike Video' : 'Like Video',
  label: videoIsLiked ? '􀊵' : '􀊴', // heart.fill : heart
  backgroundColor: videoIsLiked ? '#ff0000' : '',
  click: updateLikeVideo,
});

function updateLikeVideo() {
  videoIsLiked = !videoIsLiked;
  likeVideo.accessibilityLabel = videoIsLiked ? 'Unlike Video' : 'Like Video';
  likeVideo.label = videoIsLiked ? '􀊵' : '􀊴'; // heart.fill : heart
  likeVideo.backgroundColor = videoIsLiked ? '#ff0000' : '';
}

const flexSpacer1 = new TouchBarSpacer({
  size: 'flexible',
});

const homeTab = new TouchBarButton({
  accessibilityLabel: 'Home Tab',
  label: '􀎞 Home',
});

const discoverTab = new TouchBarButton({
  accessibilityLabel: 'Discover Tab',
  label: '􀊫 Discover',
});

const inboxTab = new TouchBarButton({
  accessibilityLabel: 'Inbox Tab',
  label: '􀈣 Inbox',
});

const profileTab = new TouchBarButton({
  accessibilityLabel: 'Profile Tab',
  label: '􀉩 Profile',
});

const tabs = new TouchBarSegmentedControl({
  segments: [homeTab, discoverTab, inboxTab, profileTab],
});

const flexSpacer2 = new TouchBarSpacer({
  size: 'flexible',
});

const createVideo = new TouchBarButton({
  accessibilityLabel: 'Create Video',
  label: '􀅼', // plus
});

const touchbar = new TouchBar({
  items: [
    videoControls,
    likeVideo,
    flexSpacer1,
    tabs,
    flexSpacer2,
    createVideo,
  ],
});

export default touchbar;

// home, discover, inbox, profile
