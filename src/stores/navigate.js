import { atomWithStorage } from "jotai/utils";

export const navigateAtom = atomWithStorage("navigateUrl", "/main"); //default 는 main으로 설정
