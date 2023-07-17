<div class="row card">
    <div class="col intro">
        <h1 class="title">Lesson<br />Rates</h1>
        <p class="subtitle">
            Matt offers several lesson packages, as well as discounts for youth lessons. To schedule a lesson, contact
            Matt directly or fill out the contact form below.
        </p>
    </div>
    <div class="col center rates">
        <div class="table">
            <table>
                <thead class="col">
                    <tr class="row">
                        <th class="package">Lesson Package</th>
                        <th class="youth-price">Youth Price</th>
                        <th class="adult-price">Adult Price</th>
                    </tr>
                </thead>
                <tbody class="col">
                    <tr class="row">
                        <td class="package">1 Half Hour Lesson</td>
                        <td class="youth-price">$60</td>
                        <td class="adult-price">$70</td>
                    </tr>
                    <tr class="row">
                        <td class="package">1 Full Hour Lesson</td>
                        <td class="youth-price">$100</td>
                        <td class="adult-price">$120</td>
                    </tr>
                    <tr class="row">
                        <td class="package">3 Half Hour Lessons</td>
                        <td class="youth-price">$170</td>
                        <td class="adult-price">$200</td>
                    </tr>
                    <tr class="row">
                        <td class="package">3 Full Hour Lessons</td>
                        <td class="youth-price">--</td>
                        <td class="adult-price">$340</td>
                    </tr>
                    <tr class="row">
                        <td class="package">6 Half Hour Lessons</td>
                        <td class="youth-price">$325</td>
                        <td class="adult-price">$375</td>
                    </tr>
                    <tr class="row">
                        <td class="package">6 Full Hour Lessons</td>
                        <td class="youth-price">--</td>
                        <td class="adult-price">$650</td>
                    </tr>
                    <tr class="row">
                        <td class="package">12 Full Hour Lesson</td>
                        <td class="youth-price">--</td>
                        <td class="adult-price">$1,300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        margin: 0rem 10rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);

        color: $primary-1;
    }

    .intro {
        gap: 2rem;

        padding: 2rem;
        min-width: 35%;
        max-width: 40%;

        background-color: $accent-2;

        color: $primary-6;
    }

    .title {
        font-size: $header-2;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: $paragraph;
        font-weight: 400;
        text-align: justify;
    }

    .rates {
        padding: 4rem;

        min-width: 50%;
        max-width: 70%;
    }

    th {
        font-size: $header-5;
        text-transform: uppercase;
    }

    td {
        font-size: $header-4;
    }

    tr:nth-child(2n-1) {
        background-color: mix($primary-5, white, 50%);
    }
</style>
