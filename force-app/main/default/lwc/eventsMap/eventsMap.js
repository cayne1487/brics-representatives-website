import { LightningElement } from 'lwc';

export default class EventsMap extends LightningElement {

    center ={
        location: {
            Latitude: 42.6150,
            Longitude: 56.3107
        }
    }
    mapMarkers = [
        {
            location: {
                Latitude: 56.8387,
                Longitude: 60.5953
            },
            title: 'Russia — Yekaterinburg 2009',
            description: 'The 2009 Yekaterinburg BRIC Summit was the first formal meeting of the BRIC countries (Brazil, Russia, India, and China), held on June 16, 2009, in Yekaterinburg, Russia. This landmark summit marked the beginning of institutionalized cooperation among the four emerging economies.'
        },
        {
            location: {
                Latitude: -15.8021,
                Longitude: -47.8890
            },
            title: 'Brazil — Brasilia 2010',
            description: 'The 2010 Brasília BRIC Summit was the second official meeting of the BRIC countries (Brazil, Russia, India, and China), held on April 15–16, 2010, in Brasília, Brazil. This summit was particularly significant as it marked the formal inclusion of South Africa, transforming the group into BRICS (Brazil, Russia, India, China, South Africa). The summit reinforced BRICS as a rising force in global economics and politics, setting the stage for deeper collaboration in later years.'
        },
        {
            location: {
                Latitude: 18.2542,
                Longitude: 109.5085
            },
            title: 'China — Sanya 2011',
            description: 'The 2011 Sanya BRICS Summit was the third annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held on April 14, 2011, in Sanya, China. This was the first summit to include South Africa as a full member, solidifying the group’s expanded identity as BRICS rather than just BRIC. The summit also saw the signing of the Sanya Declaration, which outlined a common vision for global governance reform and sustainable development. This meeting reinforced BRICS as a cohesive bloc with growing influence in shaping global economic and political discourse.'
        },
        {
            location: {
                Latitude: 28.6142,
                Longitude: 77.2027
            },
            title: 'India — New Delhi 2012',
            description: 'The 2012 New Delhi BRICS Summit was the fourth annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held on March 29, 2012, in New Delhi, India. This summit marked a significant step forward in institutionalizing BRICS cooperation, with key financial and strategic initiatives taking shape. The summit’s Delhi Declaration reinforced BRICS’ commitment to inclusive growth, financial stability, and South-South cooperation. It was a pivotal moment in transforming the bloc from a dialogue forum into a platform for tangible economic and geopolitical collaboration.'
    
        },
        {
            location: {
                Latitude: -29.8136,
                Longitude: 30.9265
            },
            title: 'South Africa — Durban 2013',
            description: 'The 2013 Durban BRICS Summit was the fifth annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held from March 26–27, 2013, in Durban, South Africa. Marking the first BRICS summit hosted on African soil, the theme was "BRICS and Africa: Partnership for Development, Integration, and Industrialization," emphasizing stronger ties between BRICS and the African continent. The summit’s eThekwini Declaration reinforced BRICS’ role as a key player in reshaping global economic governance while deepening engagement with the Global South. This meeting was a turning point, transitioning BRICS from a political dialogue forum into an action-oriented coalition with concrete financial mechanisms.'
        },
        {
            location: {
                Latitude: -3.7309,
                Longitude: -38.5251
            },
            title: 'Brazil — Fortalesa 2014',
            description: 'The 2014 Fortaleza BRICS Summit, held on July 15–16, 2014 in Fortaleza, Brazil. The Fortaleza Declaration cemented BRICS as a transformative force in global finance, shifting from rhetoric to tangible mechanisms for alternative development financing. This summit demonstrated the bloc’s growing ambition to reshape the international financial architecture.'
        },
        {
            location: {
                Latitude: 54.7351,
                Longitude: 55.9587
            },
            title: 'Russia — Ufa 2015',
            description: 'The 2015 Ufa BRICS Summit was the seventh annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held from July 8–9, 2015, in Ufa, Russia. This summit coincided with the 7th BRICS Summit and the 15th Shanghai Cooperation Organisation (SCO) Summit, highlighting Russia strategic focus on strengthening multilateral partnerships. The Ufa Declaration solidified BRICS as a major force in global economic governance, with tangible institutions and policies challenging Western financial dominance. This summit marked a shift from rhetoric to action, proving BRICS ability to deliver concrete alternatives to the existing world order.'
        },
        {
            location: {
                Latitude: 15.4989,
                Longitude: 73.8281
            },
            title: 'India — Goa 2016',
            description: 'The 2016 Goa BRICS Summit was the eighth annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held on October 15–16, 2016, in Goa, India. Under the theme “Building Responsive, Inclusive and Collective Solutions,” the summit focused on strengthening cooperation in areas such as counter-terrorism, economic growth, and sustainable development. The summit reinforced BRICS’ commitment to inclusive growth, security, and innovation, while addressing pressing geopolitical challenges. It also highlighted India’s leadership in shaping the group’s agenda during its chairmanship.'
        },
        {
            location: {
                Latitude: 24.4798,
                Longitude: 118.1165
            },
            title: 'China — Xiamen 2017',
            description: 'The 2017 Xiamen BRICS Summit was the ninth annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held from September 3–5, 2017, in Xiamen, China. Under the theme "BRICS: Stronger Partnership for a Brighter Future," the summit aimed to deepen collaboration amid global economic uncertainty and geopolitical shifts. The summit reinforced BRICS’ role as a stabilizing force in global governance, balancing Western-dominated institutions while promoting inclusive development. It also signaled China’s leadership in shaping the bloc’s future direction amid growing economic and political influence.'
        },
        {
            location: {
                Latitude: -26.2066,
                Longitude: 28.0434
            },
            title: 'South Africa — Johannesburg 2018',
            description: 'The 2018 Johannesburg BRICS Summit marked the 10th annual gathering of the BRICS nations (Brazil, Russia, India, China, and South Africa), held from July 25–27, 2018, in Johannesburg, South Africa. Under the theme "BRICS in Africa: Collaboration for Inclusive Growth and Shared Prosperity in the 4th Industrial Revolution," the summit focused on strengthening partnerships between BRICS and African nations while addressing global economic and technological challenges. The summit’s Johannesburg Declaration reaffirmed BRICS’ commitment to inclusive global growth, multilateralism, and South-South cooperation. By emphasizing technological advancement and African partnerships, the 2018 summit positioned BRICS as a key player in shaping the future of the digital economy and sustainable development.'
        },
        {
            location: {
                Latitude: -15.0000,
                Longitude: -47.8890
            },
            title: 'Brazil — Brasilia 2019',
            description: 'The 2019 Brasília BRICS Summit was the 11th annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held on November 13–14, 2019, in Brasília, Brazil. Under the theme "Economic Growth for an Innovative Future," the summit focused on strengthening cooperation in science, technology, digital economy, and sustainable development. The Brasília Declaration reaffirmed BRICS’ commitment to multilateralism, innovation, and sustainable development, while positioning the bloc as a key advocate for a more balanced global order. The summit also marked Brazil’s return to proactive BRICS engagement after a period of political uncertainty, reinforcing the group’s cohesion.'
        },
        {
            location: {
                Latitude: 59.9387,
                Longitude: 30.3149
            },
            title: 'Russia — Saint Petersburg 2020',
            description: 'The 2020 Saint Petersburg BRICS Summit was held virtually on November 17, 2020, under Russia’s chairmanship, with the theme "BRICS Partnership for Global Stability, Shared Security, and Innovative Growth." Conducted amid the COVID-19 pandemic, this 12th annual summit focused on collective responses to global health, economic recovery, and technological cooperation. The summit’s Saint Petersburg Declaration reaffirmed BRICS’ commitment to a multipolar world order, sustainable development, and post-pandemic resilience. While virtual, it demonstrated the bloc’s adaptability and reinforced its strategic priorities in a crisis-hit world.'
        },
        {
            location: {
                Latitude: 28.0000,
                Longitude: 77.2027
            },
            title: 'India — New Delhi 2021',
            description: 'The 2021 New Delhi BRICS Summit was the 13th annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held virtually on September 9, 2021, under India’s chairmanship. The summit’s theme was "BRICS@15: Intra-BRICS Cooperation for Continuity, Consolidation, and Consensus," marking the 15th anniversary of the group’s formation. The summit reaffirmed BRICS’ role in promoting a multipolar world order, with the New Delhi Declaration outlining a shared vision for inclusive global recovery and enhanced intra-BRICS cooperation. Despite being held virtually due to COVID-19, the meeting underscored the bloc’s continued relevance in addressing global challenges.'
        },
        {
            location: {
                Latitude: -26.0000,
                Longitude: 28.0434
            },
            title: 'South Africa — Johannesburg 2023',
            description: 'The 2023 Johannesburg BRICS Summit was the 15th annual meeting of the BRICS nations (Brazil, Russia, India, China, and South Africa), held from August 22–24, 2023, in Johannesburg, South Africa. Under the theme "BRICS and Africa: Partnership for Mutually Accelerated Growth, Sustainable Development, and Inclusive Multilateralism," the summit marked a historic turning point with the first major expansion of BRICS in over a decade. The summit underscored BRICS’ growing role as a counterweight to Western-dominated financial and political systems, with expansion reinforcing its appeal among Global South nations seeking alternatives in global governance. The Johannesburg Declaration emphasized multipolarity, de-dollarization, and inclusive development, setting the stage for a more assertive BRICS+ era.'
        },
        {
            location: {
                Latitude: 55.7961,
                Longitude: 49.1064
            },
            title: 'Russia — Kazan 2024',
            description: 'The 2024 Kazan BRICS Summit will be the 16th annual gathering of the BRICS alliance, hosted by Russia in Kazan from October 22–24, 2024. This summit marks a historic moment as it is the first meeting following BRICS major expansion in 2024, with Egypt, Ethiopia, Iran, Saudi Arabia, and the UAE joining as full members—bringing the total to 10 core countries. As the largest BRICS summit ever, Kazan could redefine the bloc’s influence, potentially accelerating its shift from an economic forum to a geopolitical counterweight to the G7.'
        },
        {
            location: {
                Latitude:  -22.9057,
                Longitude: -43.1891
            },
            title: 'Brazil — Rio de Janeiro 2025',
            description: 'The 2025 Rio de Janeiro BRICS Summit will be the 17th annual gathering of the BRICS alliance (Brazil, Russia, India, China, South Africa, and new members admitted in 2024), scheduled to take place in Rio de Janeiro, Brazil, under the theme "Building a Just World and a Sustainable Future." As the first summit hosted by Brazil since its return to the presidency following Luiz Inácio Lula da Silva’s re-election, the event is expected to focus on expanding BRICS’ influence in global governance, sustainable development, and economic cooperation.'
        },
    ];
}