import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface LoginDto {
  email: string;
  password: string;
  role: string;
}

interface AuthData {
  id: string;
  email: string;
  fullName: string;
  role: string;
  groupId: string;
  swpClassId: number;
  token: string;
}

interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  fullName: string;
  role: string;
  groupId: string;
  swpClassId: number;
}

interface AuthContextProps {
  authData: AuthData | null;
  login: (data: LoginDto) => Promise<string>;
  logout: () => void;
  isLoading: boolean;
  setAuthData: React.Dispatch<React.SetStateAction<AuthData | null>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const decodedToken = jwtDecode<CustomJwtPayload>(token);
          const currentTime = Date.now() / 1000;
          
          if (decodedToken.exp && decodedToken.exp > currentTime) {
            setAuthData({
              id: decodedToken.id,
              email: decodedToken.email,
              fullName: decodedToken.fullName,
              role: decodedToken.role,
              groupId: decodedToken.groupId,
              swpClassId: decodedToken.swpClassId,
              token: token,
            });
          } else {
            localStorage.removeItem("authToken");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          localStorage.removeItem("authToken");
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (data: LoginDto): Promise<string> => {
    try {
      const response = await axios.post(
        "https://localhost:7007/api/Auth/login",
        data
      );

      const token = response.data.accessToken;

      if (authData) {
        localStorage.setItem('logout', Date.now().toString());
      }

      localStorage.setItem("authToken", token);

      const decodedToken = jwtDecode<CustomJwtPayload>(token);

      const userData: AuthData = {
        id: decodedToken.id,
        email: decodedToken.email,
        fullName: decodedToken.fullName,
        role: decodedToken.role,
        groupId: decodedToken.groupId,
        swpClassId: decodedToken.swpClassId,
        token: token,
      };

      setAuthData(userData);
      
      localStorage.setItem('groupId', userData.groupId);

      return userData.role;
    } catch (error: any) {
      return error.response.data;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("groupId");
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout, isLoading, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};