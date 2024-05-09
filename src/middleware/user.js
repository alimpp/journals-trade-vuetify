import { useRouter } from "vue-router";
import { GetProfile } from "@/api/profile";

export const DetectUser = () => {
  const profile = GetProfile();
  if (!profile.username) {
    const router = useRouter();
    router.push("/create-profile");
  } else {
    const router = useRouter();
    router.push("/journals");
  }
};
