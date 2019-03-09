/*eslint no-unreachable: "off"*/

export function nagiosHostStatus(status) {
  switch(status) {
    case 1:
      return 'pending';
    case 2:
      return 'up';
    case 4:
      return 'down';
    case 8:
      return 'unreachable';
    default:
      return 'Unknown host status ' + status;
  }
  return 'Unknown host status ' + status;
}

export function nagiosStateType(state_type) {
  switch(state_type) {
    case 0:
      return 'soft';
    case 1:
      return 'hard';
    default:
     	return 'Unknown state_type ' + state_type;
  }
  return 'Unknown state_type ' + state_type;
}

export function nagiosServiceStatus(status) {
  switch(status) {
    case 1:
      return 'pending';
    case 2:
      return 'ok';
    case 4:
      return 'warning';
    case 8:
      return 'unknown';
    case 16:
      return 'critical';
    default:
     	return 'Unknown service status ' + status;
  }
  return 'Unknown service status ' + status;
}

export function nagiosAlertState(state) {
  switch(state) {
    case 1:
      return 'HOST UP';
    case 2:
      return 'HOST DOWN';
    case 4:
      return 'HOST UNREACHABLE';
    case 8:
      return 'SERVICE OK';
    case 16:
      return 'SERVICE WARNING';
    case 32:
      return 'SERVICE CRITICAL';
    case 64:
      return 'SERVICE UNKNOWN';
    default:
      return 'Unknown state ' + state;
  }
  return 'Unknown alert state ' + state;
}

export function nagiosAlertStateType(state_type) {
  switch(state_type) {
    case 1:
      return 'hard';
    case 2:
      return 'soft';
    default:
      return 'Unknown state_type ' + state_type;
  }
  return 'Unknown alert state_type ' + state_type;
}