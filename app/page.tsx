import { BeachClubPage } from "@/components/beach-club/BeachClubPage";
import { beachClubCopy } from "@/lib/beachClubContent";
import { defaultLang } from "@/lib/constants";

export default function RootPage() {
  return <BeachClubPage lang={defaultLang} copy={beachClubCopy[defaultLang]} />;
}
