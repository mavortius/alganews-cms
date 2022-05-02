import styled from "styled-components";
import { transparentize } from "polished";

type ProgressBarType = {
  progress: number,
  theme: 'primary' | 'secondary',
}

export type ProgressBarProps = {
  title: string,
  width?: number
} & ProgressBarType;

const ProgressBarWrapper = styled.div`
  height: 24px;
  color: #fff;
  background-color: ${transparentize(0.85, '#244060')};
  position: relative;
`;

const CurrentProgress = styled.div<ProgressBarType>`
  height: 100%;
  background-color: ${p => p.theme === 'primary' ? '#09f' : '#274060'};
  width: ${p => p.progress}%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${p => p.progress > 0 ? 'padding-left: 4px;' : ''}
  transition: .25s ease;
  z-index: 2;
  position: relative;
`;

const TextShadow = styled.span<ProgressBarType>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: #274060;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  padding-left: 4px;
  white-space: nowrap;
`;

export default function ProgressBar({ progress, theme, title, width }: ProgressBarProps) {
  return (
    <ProgressBarWrapper style={{ width: width || 'auto' }}>
      <TextShadow progress={progress} theme={theme}>
        {title}
      </TextShadow>
      <CurrentProgress progress={progress} theme={theme}>
        <span>{theme}</span>
      </CurrentProgress>
    </ProgressBarWrapper>
  );
}
