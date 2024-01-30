<template>
  <div>
    <div class="container">
      <span v-text="'What if you could ' + desire + ' without ' + pain + '?'"></span>
      <span v-text="'You wanna know why ' + commonVehicle + ' doesn’t work when you’re trying to ' + desire + '?'"></span>
      <span v-text="'Worried about ' + pain + '?'"></span>
      <span v-text="'Here are the Top Questions I get about how to ' + desire + '?'"></span>
      <span v-text="xNumber + ' ways to get ' + desire + ' in ' + surprisingTimeFrame + '.'"></span>
      <span v-text="xNumber + ' things you should NEVER do if you want to ' + desire + '.'"></span>
      <span v-text="'The #1 ' + topicOfInterest + ' mistake people make that keeps them from ' + desire + ' is ' + commonMistake + '.'"></span>
      <span v-text="'Here’s the top ' + xNumber + ' questions I hear beginner ' + marketAvatar + ' trying to ' + desire + '.'"></span>
      <span v-text="everydayPerson + ' reveals little known trick used by ' + wellKnownExperts"></span>
      <span v-text="'Here’s how ' + marketAvatar + ' are ' + desire + ' without ' + pain + '.'"></span>
      <button>
        <ButtonText />
      </button>
    </div>
  </div>
</template>

<script>
import { desire, pain, commonVehicle, surprisingTimeFrame, xNumber, topicOfInterest, commonMistake, marketAvatar, everydayPerson, wellKnownExperts } from './constants.js';

export default {
  data() {
    return {
      desire,
      pain,
      commonVehicle,
      surprisingTimeFrame,
      xNumber,
      topicOfInterest,
      commonMistake,
      marketAvatar,
      everydayPerson,
      wellKnownExperts
    }
  }
}
</script>
