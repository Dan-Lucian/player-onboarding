import { css } from 'utils/generalUtils';
import { ComponentEnum } from 'enums/ComponentEnum';

export const styles = css`
    settings-menu {
        position: relative;
    }

    #settings-wrapper {
        padding: 7px 0;

        display: flex;
        flex-direction: column;

        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);

        background: rgba(13, 25, 45, 0.98);
    }

    #settings-wrapper[hidden] {
        display: none !important;
    }

    .${ComponentEnum.QualityButton} {
        box-sizing: border-box;
        border: 0;
        padding: 0;
        width: 130px;
        height: 32px;

        cursor: pointer;
        background: transparent;
        color: #fff;
        font-size: 13px;
    }

    .${ComponentEnum.QualityButton}:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .${ComponentEnum.QualityButton}--active {
        font-weight: 700;
        color: #0099ff;
    }
`;
