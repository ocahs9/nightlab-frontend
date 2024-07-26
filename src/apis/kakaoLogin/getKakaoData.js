//서버가 아니라 직접 데이터를 가져올 때 사용할 로직 - 당장 사용 X
import axios from "axios";

export const getData = async (token) => {
  try {
    const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};