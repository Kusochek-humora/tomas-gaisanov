import VkIcon from "./VkIcon.vue";
import TelegramIcon from "./TelegramIcon.vue";
import YouTubeIcon from "./YoutubeIcon.vue";
import InstagramIcon from "./InstIcon.vue";
import MailIcon from "./MailIcon.vue";
import XIcon from "./XIcon.vue";
import Ideas from "./Ideas.vue";
import Fun from "./Fun.vue";
import FIlm from "./FIlm.vue";
import Organize from "./Organize.vue";
import Share from "./Share.vue";
import Learn from "./Learn.vue";
import Write from "./Write.vue";
import BorderButton from "./BorderButton.vue";
import Burger from "./Burger.vue";
import TextBtnTrigger from "./TextBtnTrigger.vue";
import VoiceBtnTrigger from "./VoiceBtnTrigger.vue";
import VideoBtnTrigger from "./VideoBtnTrigger.vue";
import None from "./None.vue";
import ConChat from "./ConChat.vue";
import ConLecture from "./ConLecture.vue";
import ConLive from "./ConLive.vue";
import ConMiro from "./ConMiro.vue";
import ConOnline from "./ConOnline.vue";
import ConPresentation from "./ConPresentation.vue";
import ConText from "./ConText.vue";

export const icons = {
  vk: VkIcon,
  telegram: TelegramIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  x: XIcon,
  ideas: Ideas,
  fun: Fun,
  film: FIlm,
  organize: Organize,
  share: Share,
  learn: Learn,
  write: Write,
  border_button: BorderButton,
  burger: Burger,
  tab_read: TextBtnTrigger,
  tab_listen: VoiceBtnTrigger,
  tab_watch: VideoBtnTrigger,
  none: None,
  con_chat: ConChat,
  con_lecture: ConLecture,
  con_live: ConLive,
  con_miro: ConMiro,
  con_online: ConOnline,
  con_presentation: ConPresentation,
  con_text: ConText,
} as const;

export type IconName = keyof typeof icons;
export type IconComponent = (typeof icons)[IconName];
export type IconProps = {
  name: IconName | (string & {});
  size?: string;
  color?: string;
  style?: string;
};
