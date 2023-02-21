import { cmyk, hsl, hsv, rgb } from "color-convert"

//type HexColor = `#${string}`;
//type RGBString = `rgb(${number}, ${number}, ${number})`;

type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';
type ActionTypes = `update-${ColorFormats}-color`

export type UpdateHEXColorAction = {
    type: 'update-hex-color',
    payload: {
        hexColor: string
    }
}

export type UpdateRGBColorAction = {
    type: 'update-rgb-color',
    payload: {
        rgb: [number, number, number]
    }
}

export type UpdateHSLColorAction = {
    type: 'update-hsl-color',
    payload: {
        hsl: [number, number, number]
    }
}

export type UpdateHSVColorAction = {
    type: 'update-hsv-color',
    payload: {
        hsv: [number, number, number]
    }
}

export type UpdateCMYKColorAction = {
    type: 'update-cmyk-color',
    payload: {
        cmyk: [number, number, number, number]
    }
}

type ColorState = {
    hexColor: string
}

export type AdjustColorActions = UpdateHEXColorAction | UpdateRGBColorAction | UpdateHSLColorAction | UpdateHSVColorAction | UpdateCMYKColorAction;

export const initialState: ColorState = {
    hexColor: '#BADA55'
}

export const colorReducer = (
    state: ColorState = initialState,
    action: AdjustColorActions
) => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload
        return { ...state, hexColor }
    }
    if (action.type === 'update-rgb-color') {
        const hexColor = `#${rgb.hex(action.payload.rgb)}`;
        return { ...state, hexColor }
    }

    if (action.type === 'update-hsl-color') {
        const hexColor = `#${hsl.hex(action.payload.hsl)}`;
        return { ...state, hexColor }
    }

    if (action.type === 'update-hsv-color') {
        const hexColor = `#${hsv.hex(action.payload.hsv)}`;
        return { ...state, hexColor }
    }

    if (action.type === 'update-cmyk-color') {
        const hexColor = `#${cmyk.hex(action.payload.cmyk)}`;
        return { ...state, hexColor }
    }

    return state;
}