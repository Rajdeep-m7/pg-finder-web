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

  checkAuth: () => Promise<boolean>;
  userSignUp: (data: SignUpData) => Promise<boolean>;
  userSignIn: (data: SignInData) => Promise<boolean>;
  ownerSignUp: (data: SignUpData) => Promise<boolean>;
  ownerSignIn: (data: SignInData) => Promise<boolean>;
  logout:()=>Promise<void>;
};

export const useAuth = create<AuthState>((set) => ({
  authUser: null,
  authOwner: null,
  isOwnerSignIn: false,
  isOwnerSignUp: false,
  isUserSignIn: false,
  isUserSignUp: false,
  isCheckingAuth: true,

  checkAuth: async () => {
  try {
    const res = await axiosInstance.get("/auth/check");

    set({
      authUser: res.data.role === "user" ? res.data : null,
      authOwner: res.data.role === "owner" ? res.data : null,
      isCheckingAuth: false,
    });

    return true;
  } catch (error) {
    const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    set({
      authUser: null,
      authOwner: null,
      isCheckingAuth: false,
    });

    return false;
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

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({
        authUser: null,
        authOwner: null,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
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

  
}));
