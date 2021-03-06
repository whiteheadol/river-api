const express = require('express');
const app = express();
const cors = require('cors');

app.locals.rivers = [
    {
      id: '1',
      run_name: 'Upper Salt Daily',
      river_name: ['Salt River'],
      state: ['AZ'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'false',
      season: ['Feb', 'Mar', 'Apr', 'May'],
      does_it_actually_run: 'No upstream dam. It runs more often than not, but the season is short and volatile. On bad years, there might be no season, and on good years there might be a three month season at most.',
      length_in_days: ['0.5', '1'],
      length_in_miles: '9',
      put_in: 'Hwy 60 (First Camp) is the most popular put-in, although putting in at Baptism Rapid slightly upstream is possible at higher flows.',
      take_out: 'Hoodoo River Access',
      gauge: ['https://waterdata.usgs.gov/az/nwis/uv/?site_no=09497500&PARAmeter_cd=00065,00060'],
      recommended_flows: {
        minimum: '300 cfs',
        maximum: '8,000+ cfs'
      },
      img: 'https://www.outdoorproject.com/sites/default/files/styles/hero_image_desktop_2x/public/features/dsc_1527-2_0.jpg?itok=bglE2LF7',
      img_credit: 'Outdoor Project',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/123/main',
      facts: ['While there is no lottery system for the daily run, you will need to purchase a daily permit for each person through the White Mountain Apache Tribe.', 'There are a few sites along the river corridor that are off limits to non tribe members. Do you research, and respect this magical place.'],
      wild_and_scenic: 'false'
    },
    {
      id: '2',
      run_name: 'Upper Salt Wilderness',
      river_name: ['Salt River'],
      state: ['AZ'],
      difficulty: ['III', 'IV', 'IV+'],
      permit_by_lottery: 'true',
      season: ['Feb', 'Mar', 'Apr', 'May'],
      does_it_actually_run: 'No upstream dam. It runs more often than not, but the season is short and volatile. On bad years, there might be no season, and on good years there might be a three month season at most.',
      length_in_days: ['2', '3', '4', '5'],
      length_in_miles: '59',
      put_in: 'Hwy 60',
      take_out: 'Hwy 288',
      gauge: ['https://waterdata.usgs.gov/az/nwis/uv/?site_no=09497500&PARAmeter_cd=00065,00060'],
      recommended_flows: {
        minimum: '350 cfs',
        maximum: '8000 cfs'
      },
      img: 'https://cacreeks.com/photos/salt16.jpg',
      img_credit: 'CA Creeks',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/123/main',
      facts: ['There are a few sites along the river corridor that are off limits to non tribe members. Do you research, and respect this magical place.'],
      wild_and_scenic: 'false'
    },
    {
      id: '3',
      run_name: 'Browns Canyon National Monument',
      river_name: ['Arkansas River'],
      state: ['CO'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'false',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'This section reliably runs each summer due to the Voluntary Flow Management Program, although it usually drops to only the native flow around mid August. During some seasons, the native flow still makes for a fun trip, but during others this will mean very low water.',
      length_in_days: ['0.5', '1', '2'],
      length_in_miles: '13',
      put_in: 'There are several options, although most boaters start in the town of Nathrop, CO. Fisherman\'s Bridge and Ruby Mountain are the most popular access points. Trip distance is calculated to Stone Bridge',
      take_out: 'Hecla Junction and Stone Bridge are the most popular take-outs.',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/07091200/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '250 cfs',
        maximum: '5500 cfs'
      },
      img: 'https://whitewatercolorado.com/wp-content/uploads/4203246.jpg',
      img_credit: 'Kodi Rafting',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/358/main',
      facts: ['The recommended flows are quite generous. If you\'re unfamiliar with the run you will likely get hung up on the low end, and the high end will be quite exciting.', 'There are many spots for camping along the river corridor if you plan to make this a two day trip. Be aware that many of these sites will be occupied by commercial trips during peak season and weekends.'],
      wild_and_scenic: 'false'
    },
    {
      id: '4',
      run_name: 'The Numbers',
      river_name: ['Arkansas River'],
      state: ['CO'],
      difficulty: ['IV', 'IV+'],
      permit_by_lottery: 'false',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'This section reliably runs each summer due to the Voluntary Flow Management Program, although it usually drops to only the native flow around mid August. During some seasons, the native flow still makes for a fun trip, but during others this will mean very low water.',
      length_in_days: ['0.5'],
      length_in_miles: '',
      put_in: 'There is a developed put-in located on HWY 24 (Numbers River Access), and an unofficial put-in slightly north. Look for a small dirt lot.',
      take_out: 'There is a stealth take-out river left after Rapid 5. The official take-outs are Miner\'s River Access and Railroad Bridge River Access.',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/07091200/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '300 cfs',
        maximum: '3000 cfs'
      },
      img: 'https://ataleoftwodirtbags.files.wordpress.com/2014/07/878869.jpeg',
      img_credit: 'A Tale of Two Dirtbags',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/356/main',
      facts: ['Much of this run is surrounded by private property - pay attention to signs.'],
      wild_and_scenic: 'false'
    },
    {
      id: '5',
      run_name: 'The Royal Gorge',
      river_name: ['Arkansas River'],
      state: ['CO'],
      difficulty: ['IV', 'IV+'],
      permit_by_lottery: 'false',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'This section reliably runs each summer due to the Voluntary Flow Management Program, although it usually drops to only the native flow around mid August. During some seasons, the native flow still makes for a fun trip, but during others this will mean very low water.',
      length_in_days: ['0.5', '1'],
      length_in_miles: '10.5',
      put_in: 'Parkdale River Access',
      take_out: 'Centennial Park (Canon City Whitewater Park)',
      gauge: ['https://waterdata.usgs.gov/co/nwis/uv?site_no=07094500'],
      recommended_flows: {
        minimum: '300 cfs',
        maximum: '6000 cfs'
      },
      img: 'https://cdn.5280.com/2017/04/royal-gorge-arkansas_yellow-feather-photography.jpg',
      img_credit: '5280 Denver\s Mile High Magazine',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/360/main',
      facts: ['Keep an eye out for the scenic train and its passengers.'],
      wild_and_scenic: 'false'
    },
    {
      id: '6',
      run_name: 'Gates of Lodore & Echo Park',
      river_name: ['Green River'],
      state: ['CO', 'UT'],
      difficulty: ['III', 'III+'],
      permit_by_lottery: 'true',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: '',
      length_in_days: ['3', '4', '5'],
      length_in_miles: '45',
      put_in: 'Put in at the Lodore Ranger Station.',
      take_out: 'Split Mountain is the most popular take-out, although you can cut your trip short by taking out at Echo Park.',
      gauge: ['https://waterdata.usgs.gov/ut/nwis/uv/?site_no=09234500&PARAmeter_cd=00065,00060,72020,00010,00095,00300,63680'],
      recommended_flows: {
        minimum: '800 cfs',
        maximum: '7000 cfs'
      },
      img: 'https://mild2wildrafting.com/wp-content/uploads/2020/10/IMG_1790-scaled.jpg',
      img_credit: 'Mild 2 Wild Rafting',
      link_to_more_info: 'https://www.whitewaterguidebook.com/utah/the-gates-of-lodore/',
      facts: ['Rainbow Park to Split Mountain can be run as a day trip.'],
      wild_and_scenic: 'false'
    },
    {
      id: '7',
      run_name: 'Rio Chama Wilderness',
      river_name: ['Rio Chama'],
      state: ['NM'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'true',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Flows are volatile. During the early permit season (Apr. 15 to Jul. 15) they are not guaranteed. During the release season (Jul. 16 to Sept. 15), flows are augmented on the weekends (Fri. - Sun.)',
      length_in_days: '',
      length_in_miles: '31',
      put_in: 'Cooper\'s El Vado Ranch',
      take_out: 'Big Eddy',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/08285500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '200 cfs',
        maximum: '4000 cfs'
      },
      img: 'https://farflung.com/wp-content/uploads/2021/04/ChamariverNewMexico-GettyImages-147454242-59d2815d845b340011047ca5.jpg',
      img_credit: 'Far Flung',
      link_to_more_info: 'https://www.recreation.gov/permits/621743',
      facts: ['Boaters can run the Chama outside of the permitted season (before Apr. 15, after Sept. 15) by self-registering for a permit. Flows are highly variable given the environment.'],
      wild_and_scenic: 'true'
    },
    {
      id: '8',
      run_name: 'North Fork of the John Day',
      river_name: ['John Day River'],
      state: ['OR'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'false',
      season: ['Apr', 'May', 'Jun', 'Jul'],
      does_it_actually_run: 'Yes',
      length_in_days: ['2', '3'],
      length_in_miles: '44',
      put_in: 'River left just upstream of Camas Creek',
      take_out: 'Monument',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/14046000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '800 cfs',
        maximum: '10,000 cfs'
      },
      img: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5275424.gif',
      img_credit: 'US Forest Service',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/1519/main',
      facts: ['Only the upper stretch of the John Day River is technically classified as wild and scenic.'],
      wild_and_scenic: 'true'
    },
    {
      id: '9',
      run_name: 'Westwater',
      river_name: ['Colorado River'],
      state: ['UT'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'false',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['1', '2'],
      length_in_miles: '17',
      put_in: 'Westwater Ranger Station',
      take_out: 'Cisco',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09163500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '1000 cfs',
        maximum: '30000 cfs'
      },
      img: 'https://www.blm.gov/sites/blm.gov/files/styles/og_image/public/UT%20WestwaterWSA_%282%29_PCJenniferJones.jpg?h=f97871b5&itok=5NpGT0WH',
      img_credit: 'US Department of the Interior, Bureau of Land Management',
      link_to_more_info: 'https://www.blm.gov/programs/national-conservation-lands/utah/westwater-canyon-wsa',
      facts: ['Permits are first-come, first-served and available two months in advance.', 'This section is usually runnable year-round, the limiting factor will likely be your cold tolerance. Check for ice before attempting a winter trip, though.', 'You can easily run this stretch in a day, but many boaters enjoy spending a night camping.'],
      wild_and_scenic: 'false'
    },
    {
      id: '10',
      run_name: 'Ruby-Horsethief',
      river_name: ['Colorado River'],
      state: ['CO', 'UT'],
      difficulty: ['II'],
      permit_by_lottery: 'true',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['2', '3'],
      length_in_miles: '25',
      put_in: 'Loma',
      take_out: 'Westwater Ranger Station',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09163500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '1000 cfs',
        maximum: '25000 cfs'
      },
      img: 'https://adventr.co/wp-content/uploads/2014/12/7877587736_d89b71d0ca_b.jpg',
      img_credit: 'https://adventr.co/2012/08/ruby-horsethief-canyons/',
      link_to_more_info: 'Recreation.gov',
      facts: ['Many people combine this float with Westwater directly downstream.'],
      wild_and_scenic: 'false'
    },
    {
      id: '11',
      run_name: 'Yampa',
      river_name: ['Yampa River'],
      state: ['CO', 'UT'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'true',
      season: ['Apr', 'May', 'Jun', 'Jul'],
      does_it_actually_run: '',
      length_in_days: ['4', '5', '6'],
      length_in_miles: '72',
      put_in: 'Deerlodge Park',
      take_out: 'The most popular take-out is Split Mountain, although you could cut your trip short by taking out at Echo Park instead',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09260050/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '800 cfs',
        maximum: '25,000 cfs'
      },
      img: 'https://cdn.5280.com/2017/04/yampa-river_courtesy-of-o.a.r.s.jpg',
      img_credit: 'Yampa River Rafting',
      link_to_more_info: 'https://www.nps.gov/dino/planyourvisit/boating-and-rafting.htm',
      facts: ['The difficulty rating can be a bit misleading. Most rapids are very mild with the exception of Warm Springs, which can get very exciting.'],
      wild_and_scenic: 'false'
    },
    {
      id: '12',
      run_name: 'Gunnison Gorge',
      river_name: ['Gunnison River'],
      state: ['CO'],
      difficulty: ['III', 'III+'],
      permit_by_lottery: 'false',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: '',
      length_in_days: ['1', '2'],
      length_in_miles: '14',
      put_in: 'Chukar Boat Ramp - accessed via a primitive road followed by a mile long hike in.',
      take_out: 'Pleasure Park',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09128000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '600 cfs',
        maximum: '2500 cfs'
      },
      img: 'http://arkansasrivertours.com/wp-content/uploads/2018/07/2-Day-Gunnison-Gorge-scaled.jpg',
      img_credit: 'Arkansas River Tours',
      link_to_more_info: 'https://www.blm.gov/sites/blm.gov/files/River%20Map%20in%20PDF%20for%20web.pdf',
      facts: ['If you choose to rent mules to help with the gear carry in, contact J and R Outfitters.'],
      wild_and_scenic: 'false'
    },
    {
      id: '13',
      run_name: 'Cataract Canyon',
      river_name: ['Green River', 'Colorado River'],
      state: ['UT'],
      difficulty: ['IV-'],
      permit_by_lottery: 'false',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
      does_it_actually_run: '',
      length_in_days: ['4', '5', '6', '7'],
      length_in_miles: '96',
      put_in: 'This run is unique in that you can put in on either the Green or Colorado River - you will boat through the confluence and into the Colorado regardless. Mineral Bottom is the Green put-in. Potash Launch is the Colorado put-in. Potash is considered logistically easier.',
      take_out: 'Dirty Devil is the most common take-out, although Hite Marina can be used when the lake is higher.',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09180500/#parameterCode=00060&period=P7D', 'https://waterdata.usgs.gov/monitoring-location/09315000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '3500 cfs',
        maximum: 'Boaters will run Cataract at almost any level, but things will get very exciting above around 25,000 cfs'
      },
      img: 'https://mts-wp-uploads.s3.us-west-1.amazonaws.com/trips/trip_hero26_ct5_1400x613.jpg',
      img_credit: 'MT Sobek',
      link_to_more_info: 'https://www.nps.gov/cany/planyourvisit/riverpermits.htm',
      facts: ['The best way to accurately find the flow, is to add the two gage cfs value together!', 'Permits for Cat are first-come, first-served, and there is no daily launch limit. The logistics of this trip often deter boaters.', 'You will float through a lot of flat water on this trip, as all of the rapids are run in a 14 mile stretch.', 'The trip lengths vary so much as some groups choose to take a motor for the flat sections, and others choose to move more slowly.'],
      wild_and_scenic: 'false'
    },
    {
      id: '14',
      run_name: 'Desolation Gray',
      river_name: ['Green River'],
      state: ['UT'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'true',
      season: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov'],
      does_it_actually_run: '',
      length_in_days: ['3', '4', '5', '6', '7', '8'],
      length_in_miles: '84',
      put_in: 'Sand Wash',
      take_out: 'Swasey\'s Beach',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09315000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minumum: '1000 cfs',
        maximum: '25000 cfs'
      },
      img: 'http://cloudridge.org/seminars/2012/img/2012/1200/Grays-Deso-Green-River-3-High-Res.jpg',
      img_credit: 'Cloud Ridge Naturalists',
      link_to_more_info: 'https://www.blm.gov/programs/recreation/passes-and-permits/lotteries/utah/desolationgray',
      facts: ['While the lottery permits are awarded for trips between May 1 and Sept. 30, it is possible to watch the gauge and boat outside of the lottery season. You will still need a permit, however they are first-come, first-served.'],
      wild_and_scenic: 'false'
    },
    {
      id: '15',
      run_name: 'Middle Fork of the Salmon',
      river_name: ['Middle Fork of the Salmon River'],
      state: ['ID'],
      difficulty: ['III', 'IV', 'IV+'],
      permit_by_lottery: 'true',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['6', '7', '8'],
      length_in_miles: '101',
      put_in: 'Boundary Creek',
      take_out: 'Cache Bar',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13309220/#parameterCode=00065&period=P7D'],
      recommended_flows: {
        minimum: '800 cfs',
        maximum: '12000 cfs'
      },
      img: 'https://i.ytimg.com/vi/gMbh_n-avvs/maxresdefault.jpg',
      img_credit: 'Western River Expeditions',
      link_to_more_info: 'https://www.recreation.gov/permits/234622',
      facts: ['Flows are unregulated by any upstream dam, so although this run reliably boatable each year, the level is likely to be volatile.', 'The campsite reservation system for this river is unique (you register your intended sites with a ranger before launching), so you\'ll want to plan your sites and daily mileage in advance.'],
      wild_and_scenic: 'true'
    },
    {
      id: '16',
      run_name: 'Main Fork of the Salmon',
      river_name: ['Salmon River'],
      state: ['ID'],
      difficulty: ['III'],
      permit_by_lottery: 'true',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['6', '7'],
      length_in_miles: '78',
      put_in: 'Corn Creek',
      take_out: 'Carey Creek',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13317000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '2000 cfs',
        maximum: '30000 cfs'
      },
      img: 'https://wetplanetwhitewater.com/wp-content/uploads/2019/06/leslie-main-salmon-blog-post-hero.jpg',
      img_credit: 'Wet Planet Whitewater',
      link_to_more_info: 'https://www.recreation.gov/permits/234622',
      facts: ['It\'s very possible to run this stretch outside of the lottery season, when permits are simply first-come, first-served. Check the water level and be prepared for some cold weather.', 'This stretch has the most incredible hot springs you\'ll find on a river trip - don\'t skip it!'],
      wild_and_scenic: 'true'
    },
    {
      id: '17',
      run_name: 'Lower Salmon Canyon',
      river_name: ['Salmon River', 'Snake River'],
      state: ['ID'],
      difficulty: ['II', 'III', 'IV'],
      permit_by_lottery: 'false',
      season: ['Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['4', '5', '6'],
      length_in_miles: '72',
      put_in: 'Hammer Creek',
      take_out: 'Heller Bar, 20 miles after the confluence with the Snake River',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13317000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '3000 cfs',
        maximum: '20000 cfs'
      },
      img: 'https://d2jr8zxei7kmbc.cloudfront.net/img/sidebar/lower-salmon-river-rafting-camp.jpg',
      img_credit: 'Western River Expeditions',
      link_to_more_info: 'https://www.blm.gov/sites/blm.gov/files/documents/files/Media-Center_Public-Room_Idaho_Lower-Salmon-river_BoaterGuide2018.pdf',
      facts: ['With no lottery system, permits for this stretch are first-come, first-served.', 'The Lower Salmon technically encompasses the 112 miles of river below Vinegar Creek, this is just the most commonly run stretch.', 'It\'s possible to run Hammer Creek to Pine Creek/Pine Bar Launch ten miles downstream as a day trip.'],
      wild_and_scenic: 'true'
    },
    {
      id: '18',
      run_name: 'Grand Canyon (The Grand)',
      river_name: ['Colorado River'],
      state: ['AZ'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'true',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Of course!',
      length_in_days: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
      length_in_miles: '280',
      put_in: 'Lee\'s Ferry',
      take_out: 'Pearce and Diamond are the only take-out options, but which to use will be dictated by your trip logistics.',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09380000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: 'Regulated by a strict release schedule, it is always runnable',
        maximum: 'Regulated by a strict release schedule, it is always runnable'
      },
      img: 'https://mtsobek.imgix.net/2018/11/canyon-rafting-2.jpg?auto=compress&fm=pjpg&ixlib=php-3.3.1?w=580&h=580&fit=crop',
      img_credit: 'MT Sobek',
      link_to_more_info: 'https://www.nps.gov/grca/planyourvisit/whitewater-rafting.htm',
      facts: ['Pulling a permit for The Grand is incredibly difficult, and many people try for years before ever getting one (if ever).', 'While the whitewater is wonderful, the length of this trip is a huge appeal to many, along with the uniquely beautiful side hike opportunities.'],
      wild_and_scenic: 'false'
    },
    {
      id: '19',
      run_name: 'The Rogue',
      river_name: ['Rogue River'],
      state: ['OR'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'true',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['3', '4'],
      length_in_miles: '35',
      put_in: 'Grave Creek',
      take_out: 'Foster Bar',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/14372300/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '800 cfs',
        maximum: '32000 cfs'
      },
      img: 'https://1aakpxvai132p26ca4frgcap-wpengine.netdna-ssl.com/wp-content/uploads/2014/05/Rogue-River-Rafting-Oregon.jpg',
      img_credit: 'Whitewater Guide Book',
      link_to_more_info: 'https://www.blm.gov/programs/recreation/permits-and-passes/lotteries-and-permit-systems/oregon-washington/rogue-river',
      facts: ['The permit season lasts from May 15th to Oct 15th, but there is often enough water to boat most of the year. Off season permits are available at the Smullin Visitor Center.'],
      wild_and_scenic: 'true'
    },
    {
      id: '20',
      run_name: 'Hells Canyon',
      river_name: ['Snake River'],
      state: ['ID', 'OR'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'true',
      season: ['May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes.',
      length_in_days: ['3', '4'],
      length_in_miles: '32',
      put_in: 'Hell\'s Canyon Boat Ramp',
      take_out: 'Pittsburg Landing',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13290450/#parameterCode=00060&timeSeriesId=47719&period=P7D'],
      recommended_flows: {
        minimum: '6500 cfs',
        maximum: '80000 cfs'
      },
      img: 'https://blog-assets.thedyrt.com/uploads/2020/01/shutterstock_518518474-3.jpg',
      img_credit: 'The Dyrt',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/633/main',
      facts: ['Boating this stretch will take you through the deepest river canyon in the United States.'],
      wild_and_scenic: 'true'
    },
    {
      id: '21',
      run_name: 'Selway',
      river_name: ['Selway River'],
      state: ['ID'],
      difficulty: ['IV', 'IV+'],
      permit_by_lottery: 'true',
      season: ['May', 'Jun', 'Jul'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['4', '5', '6'],
      length_in_miles: '47',
      put_in: 'Paradise Boat Ramp',
      take_out: 'Selway Falls',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13336500/#parameterCode=00060&timeSeriesId=47830&period=P7D'],
      recommended_flows: {
        minimum: '700 cfs',
        maximum: '35000 cfs'
      },
      img: 'https://www.americanwhitewater.org//photos/archive/medium/879559.jpg',
      img_credit: 'American Whitewater',
      link_to_more_info: 'https://www.recreation.gov/permits/234624',
      facts: ['This permit is often considered one of the hardest in the country to get (vying with the Grand Canyon).'],
      wild_and_scenic: 'true'
    },
    {
      id: '22',
      run_name: 'Moab Daily',
      river_name: ['Colorado River'],
      state: ['UT'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'false',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Yes',
      length_in_days: ['0.5', '1'],
      length_in_miles: '14',
      put_in: 'Hittle Bottom',
      take_out: 'Take Out - an obvious spot with a simple name on highway 191',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09180500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '1500 cfs',
        maximum: '20000 cfs'
      },
      img: 'https://static.rootsrated.com/image/upload/s--pQ5u7yaT--/t_rr_large_natural/obwgivvufmsa3gyhbrof.jpg',
      img_credit: 'Roots Rated',
      link_to_more_info: 'https://www.roadtripryan.com/go/t/utah/moab/moab-daily',
      facts: ['Posisbly the most popular section of the entire Colorado River, be prepared to share with others.'],
      wild_and_scenic: 'false'
    },
    {
      id: '23',
      run_name: 'Alpine Canyon',
      river_name: ['Snake River'],
      state: ['WY'],
      difficulty: ['III', 'III+'],
      permit_by_lottery: 'false',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['0.5'],
      length_in_miles: '8',
      put_in: 'West Table',
      take_out: 'Sheep Gulch',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13022500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '1200 cfs',
        maximum: '18000 cfs'
      },
      img: 'https://www.americanwhitewater.org//photos/archive/888736.jpg',
      img_credit: 'American Whitewater',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/2472/main',
      facts: ['This is a popular commercial stretch - expect company!'],
      wild_and_scenic: 'true'
    },
    {
      id: '24',
      run_name: 'The Fractions',
      river_name: ['Arkansas River'],
      state: ['CO'],
      difficulty: ['III', 'III+'],
      permit_by_lottery: 'false',
      season: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['0.5'],
      length_in_miles: '7',
      put_in: 'Railroad Bridge',
      take_out: 'Buena Vista Play Park',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/07087050/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '400 cfs',
        maximum: '3000 cfs'
      },
      img: 'https://www.americanwhitewater.org//photos/archive/medium/7662.jpg',
      img_credit: 'American Whitewater',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/357/main',
      facts: ['Frog Rock is a well marked river hazard - stay right!'],
      wild_and_scenic: 'false'
    },
    {
      id: '25',
      run_name: 'San Juan',
      river_name: ['San Juan River'],
      state: ['UT'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'true',
      season: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
      does_it_actually_run: '',
      length_in_days: ['4', '5'],
      length_in_miles: '57',
      put_in: 'Mexican Hat is the most populat put-in, although boaters can put in at Sand Island 27 miles upstream for a longer trip.',
      take_out: 'Clay Hills',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/09379500/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '500 cfs',
        maximum: '8000 cfs'
      },
      img: 'https://www.westernriver.com/blog/wp-content/uploads/2015/04/5437590e5996d7ec28f9ba038f7cbe09_w480.jpeg',
      img_credit: 'Western River Expeditions',
      link_to_more_info: 'https://www.bikeraft.com/insiders-guide-to-floating-the-san-juan-river-in-utah/',
      facts: [''],
      wild_and_scenic: 'false'
    },
    {
      id: '26',
      run_name: 'Lower Owyhee',
      river_name: ['Owyhee River'],
      state: ['OR'],
      difficulty: ['II', 'III'],
      permit_by_lottery: 'false',
      season: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
      does_it_actually_run: 'Yes, but the season is often short.',
      length_in_days: ['3', '4', '5'],
      length_in_miles: '65',
      put_in: 'Rome',
      take_out: 'You can take out at Birch Creek or Leslie Gulch. Taking out at Leslie Gulch will mean running quite a bit of flat water, however the Birch Creek is 4WD access only and unsuitable for trailers. This mileage is calculated from Rome to Leslie.',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13181000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '700 cfs',
        maximum: '9000 cfs'
      },
      img: 'https://www.orangetorpedo.com/storage/app/media/.resized/d67/2B3F53A4-B3DE-45E3-998C-B250649AE5EC-d67aa035770728145f55656f59e02dae.jpeg',
      img_credit: 'Orange Torpedo Trips',
      link_to_more_info: 'https://www.whitewaterguidebook.com/oregon/owyhee-river/',
      facts: ['Permits are self-issued through the BLM website.'],
      wild_and_scenic: 'true'
    },
    {
      id: '27',
      run_name: 'Middle Owyhee',
      river_name: ['Owyhee River'],
      state: ['OR'],
      difficulty: ['III', 'IV'],
      permit_by_lottery: 'false',
      season: ['Mar', 'Apr', 'May', 'Jun'],
      does_it_actually_run: 'Yes, but the season is often short.',
      length_in_days: ['2', '3', '4'],
      length_in_miles: '36',
      put_in: 'Three Forks',
      take_out: 'Rome',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13181000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '1000 cfs',
        maximum: '3000 cfs'
      },
      img: 'https://www.whitewaterguidebook.com/wp-content/uploads/2014/09/Middle-Owyhee-River1.jpg',
      img_credit: 'Whitewater Guidebook',
      link_to_more_info: 'https://www.whitewaterguidebook.com/oregon/middle-owyhee-river/',
      facts: ['There is one major rapid (Widowmaker, class V) that is almost always portaged. It\'s difficulty is not taken into account for this section\'s rating because of this.'],
      wild_and_scenic: 'true'
    },
    {
      id: '28',
      run_name: 'Deschutes, Warm Springs Section',
      river_name: ['Deschutes River'],
      state: ['OR'],
      difficulty: ['III', 'III+'],
      permit_by_lottery: 'false',
      season: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      does_it_actually_run: 'Yes! Often year round.',
      length_in_days: ['5', '6'],
      length_in_miles: '53',
      put_in: 'Warm Springs',
      take_out: 'Sherars Falls',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/14103000/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '2500 cfs',
        maximum: '8000 cfs'
      },
      img: 'https://www.americanwhitewater.org//photos/archive/19316.jpg',
      img_credit: 'American Whitewater',
      link_to_more_info: 'https://www.americanwhitewater.org/content/River/view/river-detail/1507/main',
      facts: ['The Deschutes has many access points, and trips are easy to customize to your schedule.'],
      wild_and_scenic: 'true'
    },
    {
      id: '29',
      run_name: 'South Fork of the Salmon',
      river_name: ['Secesh River', 'Salmon River'],
      state: ['ID'],
      difficulty: ['IV'],
      permit_by_lottery: 'false',
      season: ['May', 'Jun', 'Jul', 'Aug'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['3', '4'],
      length_in_miles: '59',
      put_in: 'Confluence of the Sacesh River',
      take_out: 'Vinegar Creek',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/13310700/'],
      recommended_flows: {
        minimum: '1 ft',
        maximum: '7 ft'
      },
      img: 'https://www.whitewaterguidebook.com/wp-content/uploads/2014/07/Grouse-Creek-Rapid.jpg',
      img_credit: 'Whitewater Guidebook',
      link_to_more_info: '',
      facts: [''],
      wild_and_scenic: 'false'
    },
    {
      id: '30',
      run_name: 'Smith',
      river_name: ['Smith River'],
      state: ['MT'],
      difficulty: ['II', 'II+'],
      permit_by_lottery: 'true',
      season: ['Apr', 'May', 'Jun', 'Jul'],
      does_it_actually_run: 'Yes!',
      length_in_days: ['4', '5'],
      length_in_miles: '59',
      put_in: 'Camp Baker',
      take_out: 'Eden\'s Bridge',
      gauge: ['https://waterdata.usgs.gov/monitoring-location/06077200/#parameterCode=00060&period=P7D'],
      recommended_flows: {
        minimum: '200 cfs',
        maximum: '2000 cfs'
      },
      img: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_630,q_60,w_1200/v1558324386/campground-photos/s2lez9bvecryeqpudr9h.jpg',
      img_credit: 'Hipcamp',
      link_to_more_info: '',
      facts: [''],
      wild_and_scenic: 'false'
    }
  ];

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 4000);
app.locals.title = 'US Rivers';

app.get('/', (request, response) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.send('Oh hey River API');
});

app.get('/api/v1/rivers', (request, response) => {
  const rivers = app.locals.rivers;

  response.json({ rivers });
});

app.get('/api/v1/rivers/:id', (request, response) => {
  // Line below is just an example of destructuring
  const { id } = request.params;
  const river = app.locals.rivers.find(trip => trip.id === id);
  if (!river) {
    return response.sendStatus(404);
  }

  response.status(200).json(river);
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
