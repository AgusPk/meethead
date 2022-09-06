import { useEffect, useState } from 'react';

enum DeviceSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  XMEDIUM = 'xmedium',
  LARGE = 'large',
  XLARGE = 'xlarge',
  UNKNOWN = 'unknown',
}

enum DeviceBreakpoints {
  XSMALL = 0,
  SMALL = 600,
  MEDIUM = 960,
  XMEDIUM = 1400,
  LARGE = 1280,
  XLARGE = 1920,
  UNKNOWN = 0,
}

const getDeviceSize = (width: number): DeviceSize => {
  if (width < DeviceBreakpoints.SMALL) {
    return DeviceSize.XSMALL;
  }
  if (width >= DeviceBreakpoints.SMALL && width < DeviceBreakpoints.MEDIUM) {
    return DeviceSize.SMALL;
  }
  if (width >= DeviceBreakpoints.MEDIUM && width < DeviceBreakpoints.XMEDIUM) {
    return DeviceSize.MEDIUM;
  }
  if (width >= DeviceBreakpoints.XMEDIUM && width < DeviceBreakpoints.LARGE) {
    return DeviceSize.XMEDIUM;
  }
  if (width >= DeviceBreakpoints.LARGE && width < DeviceBreakpoints.XLARGE) {
    return DeviceSize.LARGE;
  }
  if (width >= DeviceBreakpoints.LARGE) {
    return DeviceSize.XLARGE;
  }

  return DeviceSize.UNKNOWN;
};

export const useIsSmallDevice = (): boolean => {
  const [isSmallDevice, setIsSmallDevice] = useState(checkIsSmallDevice());

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(checkIsSmallDevice());
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallDevice;
};

export const checkIsSmallDevice = (): boolean => {
  const deviceSize = getDeviceSize(window.innerWidth);
  return [DeviceSize.XSMALL, DeviceSize.SMALL].includes(deviceSize);
};

export default useIsSmallDevice;
