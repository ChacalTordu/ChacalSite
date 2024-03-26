<template>
    <div class="cardEvent">
        <div class="cardImageContainer"><img :src="media"></div>
        <div class="cardEventDescription">
            <div class="mainDescription">
                <div class="title">{{ title }}</div>
                <div class="type">{{ type }}</div>
            </div>
            <div class="secondaryDescription">
                <div class="date"><img src="../icons/calendar/icons8-calendar-24.png"><span>{{ date }}</span></div>
                <div class="location"><img src="../icons/location/icons8-location-24.png"><span>{{ location }}</span></div>
                <div class="participantsNb"><img src="../icons/user/icons8-user-24.png"><span>{{ participantsNb }}</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({ media : String, 
                                title : String, 
                                type : String, 
                                date : String,
                                location : String,
                                participantsNb : String})
</script>

<style scoped>
.cardEvent {
    display: flex;
    flex-direction: column;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    /* gap: var(--gap-xl); */
}
.cardImageContainer {
    align-self: stretch;
    height: var(--A7-width);
    width: var(--A7-height);
    position: relative;
    background-color: var(--color-black);
    border-radius: var(--br-xs);
}
.cardEventDescription {
    width: 100%;
    background-color: var(--color-white);
    border-radius: var(--br-xs);
}
.mainDescription {
    width: 100%;
    padding-bottom: var(--padding-3xs);
}
.title {
    font-size: var(--font-size-7xl);
}
.type {
    font-size: var(--font-size-lg);
}
.date, .location, .participantsNb {
    display: flex;
    align-items: center;
    font-size: var(--font-size-sm);
}
.description {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    font-family: inherit;
}
.name {
    align-self: stretch;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
</style>