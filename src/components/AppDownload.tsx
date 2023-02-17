import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Color from "color";
import { Download } from "@styled-icons/bootstrap/Download";
import { Button } from "../controls";
import { GithubRelease } from "../types";

const StyledAppDownload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(p) => p.theme.fg};
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const StyledButtons = styled.div`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const DownloadIcon = styled(Download)`
  height: 1em;
  padding: 5px;
`;

const ReleaseVersion = styled.span`
  user-select: none;
  color: ${(p) => p.theme.fg};
  background-color: black;
  border: 1px solid ${(p) => p.theme.fg};
  border-radius: 7px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 10px;
  font-size: 0.4em;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

const Link = styled.a`
  font-weight: 700;
  color: ${(p) => p.theme.fg};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  transition: opacity 100ms ease-in-out;
`;

const AppDownload = () => {
  const getReleases = async () => {
    const url = `https://api.github.com/repos/midnightprioriem/calamus/releases`;
    const { data } = await axios.get(url);
    const latestRelease = data[0] as GithubRelease;
    console.log(latestRelease);
    latestRelease.assets.forEach((asset) => {
      //set windows url
      if (asset.name.endsWith(".exe")) {
        setWindowsUrl(asset.browser_download_url);
      }
      //set mac silicon
      else if (asset.name.endsWith("arm64.dmg")) {
        setMacSiliconUrl(asset.browser_download_url);
      }
      //set mac intel
      else if (asset.name.endsWith(".dmg") && !asset.name.includes("arm64")) {
        setMacIntelUrl(asset.browser_download_url);
      }
    });
    setReleaseVersion(latestRelease.name);
  };
  useEffect(() => {
    getReleases();
  }, []);

  const [windowsUrl, setWindowsUrl] = useState("");
  const [macSiliconUrl, setMacSiliconUrl] = useState("");
  const [macIntelUrl, setMacIntelUrl] = useState("");
  const [releaseVersion, setReleaseVersion] = useState("fetching latest release...");

  return (
    <StyledAppDownload>
      <Title>
        Download&nbsp;for&nbsp;<strong>free</strong>&nbsp;
        <ReleaseVersion>{releaseVersion}</ReleaseVersion>
      </Title>
      <StyledButtons>
        <Button href={windowsUrl}>
          <DownloadIcon />
          Windows
        </Button>
        <Button href={macSiliconUrl}>
          <DownloadIcon />
          macOS Silicon
        </Button>
        <Button href={macIntelUrl}>
          <DownloadIcon />
          macOS Intel
        </Button>
      </StyledButtons>
      <span>
        Find&nbsp;all&nbsp;releases&nbsp;on&nbsp;
        <Link
          href="https://github.com/midnightprioriem/calamus/releases"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>
      </span>
    </StyledAppDownload>
  );
};

export default AppDownload;
