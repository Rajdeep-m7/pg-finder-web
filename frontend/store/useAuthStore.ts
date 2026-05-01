import { create } from "zustand";
import { toast } from "sonner";
import axiosInstance from "@/lib/AxiosInstance";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface SignInData {
  email: string;
  password: string;
}

type AuthState = {
  authUser: User | null;
  authOwner: User | null;
  isUserSignIn: boolean;
  isUserSignUp: boolean;
  isOwnerSignIn: boolean;
  isOwnerSignUp: boolean;
  isCheckingAuth: boolean;

  checkUserAuth: () => Promise<void>;
  userSignUp: (data: SignUpData) => Promise<boolean>;
  userSignIn: (data: SignInData) => Promise<boolean>;
  ownerSignUp: (data: SignUpData) => Promise<boolean>;
  ownerSignIn: (data: SignInData) => Promise<boolean>;
};

export const useAuth = create<AuthState>((set) => ({
  authUser: null,
  authOwner: null,
  isOwnerSignIn: false,
  isOwnerSignUp: false,
  isUserSignIn: false,
  isUserSignUp: false,
  isCheckingAuth: true,

  checkUserAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/user/check");
      if (res.data.role != "user") {
        set({
          authUser: null,
          isCheckingAuth: false,
        });
        return;
      }
      set({
        authUser: res.data,
        isCheckingAuth: false,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isCheckingAuth: false });
    }
  },

  userSignUp: async (data) => {
    try {
      set({ isUserSignUp: true });

      const res = await axiosInstance.post("/auth/user/signup", data);

      toast.success("Signup successful");
      set({
        authUser: res.data,
        isUserSignUp: false,
      });
      return true;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isUserSignUp: false });
      return false;
    }
  },

  userSignIn: async (data) => {
    try {
      set({ isUserSignIn: true });

      const res = await axiosInstance.post("/auth/user/signin", data);

      toast.success("Login successful");
      set({
        authUser: res.data,
        isUserSignIn: false,
      });
      return true;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isUserSignIn: false });
      return false;
    }
  },

  userLogout: async () => {
    try {
      await axiosInstance.post("/auth/user/logout");
      set({
        authUser: null,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    }
  },

  checkOwnerAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/owner/check");
      if (res.data.role != "admin") {
        set({
          authOwner: null,
          isCheckingAuth: false,
        });
        return;
      }
      set({
        authOwner: res.data,
        isCheckingAuth: false,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isCheckingAuth: false });
    }
  },

  ownerSignUp: async (data: SignUpData) => {
    try {
      set({ isOwnerSignUp: true });
      const res = await axiosInstance.post("/auth/owner/signup", data);
      set({
        authOwner: res.data,
        isOwnerSignUp: false,
      });
      toast.success("Owner Signup successful");
      return true;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isOwnerSignUp: false });
      return false;
    }
  },

  ownerSignIn: async (data: SignInData) => {
    try {
      set({ isOwnerSignIn: true });
      const res = await axiosInstance.post("/auth/owner/signin", data);
      set({
        authOwner: res.data,
        isOwnerSignIn: false,
      });
      toast.success("Owner Signup successful");
      return true;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
      set({ isOwnerSignIn: false });
      return false;
    }
  },

  ownerLogout: async () => {
    try {
      await axiosInstance.post("/auth/owner/logout");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    }
  },
}));
