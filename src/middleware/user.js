import { useRouter, useRoute } from "vue-router";
import { GetProfile } from "@/api/profile";

export const DetectUser = () => {
  const profile = GetProfile();
  if (!profile.username) {
    const router = useRouter();
    router.push("/create-profile");
  } else {
    const route = useRoute();
    const router = useRouter();
    router.push(`${route.path}`);
  }
};
