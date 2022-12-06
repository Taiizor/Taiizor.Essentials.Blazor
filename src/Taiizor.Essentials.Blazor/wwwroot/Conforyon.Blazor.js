console.log('%cConforyon Blazor Javascript has started.', 'color: #FFC000');


var Conforyon = {};


Conforyon.Clear = false;
Conforyon.Empty = "Empty!";
Conforyon.Error = "Error!";


Conforyon.Enum = {};

Conforyon.Enum.ColorType = {
    RGB1: "RGB1",
    RGB2: "RGB2",
    RGB3: "RGB3",
    RRGGBB1: "RRGGBB1",
    RRGGBB2: "RRGGBB2",
    RRGGBB3: "RRGGBB3",
    RR: "RR",
    GG: "GG",
    BB: "BB",
    OnlyR: "OnlyR",
    OnlyG: "OnlyG",
    OnlyB: "OnlyB"
};

Conforyon.Enum.CryptologyType = {
    AES: "AES",
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    SHA384: "SHA384",
    SHA512: "SHA512",
    TEXT: "TEXT",
    BASE: "BASE"
};

Conforyon.Enum.CryptologyCipherMode = {
    CBC: "CBC",
    ECB: "ECB",
    OFB: "OFB",
    CFB: "CFB",
    CTS: "CTS"
};

Conforyon.Enum.HashType = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    SHA384: "SHA384",
    SHA512: "SHA512"
};

Conforyon.Enum.LengthType = {
    MM: "MM",
    CM: "CM",
    DM: "DM",
    M: "M",
    DAM: "DAM",
    HM: "HM",
    KM: "KM"
};

Conforyon.Enum.SpeedType = {
    MPH: "MPH",
    KPH: "KPH"
};

Conforyon.Enum.StorageType = {
    Bit: "Bit",
    Byte: "Byte",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    ZB: "ZB",
    YB: "YB"
}

Conforyon.Enum.TimeType = {
    Nanosecond: "Nanosecond",
    Microsecond: "Microsecond",
    Millisecond: "Millisecond",
    Second: "Second",
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Year: "Year",
    Century: "Century",
    Millennium: "Millennium"
}

Conforyon.Enum.WeightType = {
    Milligram: "Milligram",
    Gram: "Gram",
    KG: "KG"
};

Conforyon.Enum.TypographyType = {
    INCH: "INCH",
    CM: "CM",
    PX: "PX"
};

Conforyon.Enum.TemperatureType = {
    Kelvin: "Kelvin",
    Celsius: "Celsius",
    Fahrenheit: "Fahrenheit"
};

Conforyon.Enum.MethodType = {
    DataStorage: "DataStorage",
    Temperature: "Temperature",
    Typography: "Typography",
    Speed: "Speed",
    Error: "Error",
    Time: "Time"
};


Conforyon.Helper = {};
Conforyon.Helper.Value = {};
Conforyon.Helper.Culture = {};
Conforyon.Helper.Value.Value = "8";
Conforyon.Helper.Value.First = "Bit";
Conforyon.Helper.Value.Last = "Byte";
Conforyon.Helper.Culture.Name = "en-GB";
Conforyon.Helper.Culture.Override = false;
Conforyon.Helper.Value.ErrorMethod = Conforyon.Enum.MethodType.Error;
Conforyon.Helper.Value.ValueMethod = Conforyon.Enum.MethodType.DataStorage;


Conforyon.Time = {};
Conforyon.Time.Auto = {};
Conforyon.Time.Normal = {};
Conforyon.Time.Comma = false;
Conforyon.Time.PostComma = 0;
Conforyon.Time.Decimal = false;
Conforyon.Time.TypeText = false;

Conforyon.Hash = {};
Conforyon.Hash.File = {};
Conforyon.Hash.File.Md5 = {};
Conforyon.Hash.File.Sha1 = {};
Conforyon.Hash.File.Sha256 = {};
Conforyon.Hash.File.Sha384 = {};
Conforyon.Hash.File.Sha512 = {};
Conforyon.Hash.Uppercase = false;

Conforyon.Board = {};
Conforyon.Board.Text = {};
Conforyon.Board.Audio = {};

Conforyon.Speed = {};
Conforyon.Speed.Mph = {};
Conforyon.Speed.Kph = {};
Conforyon.Speed.Text = true;
Conforyon.Speed.Mph.Kph = {};
Conforyon.Speed.Kph.Mph = {};
Conforyon.Speed.PostComma = 0;

Conforyon.Color = {};
Conforyon.Color.Hex = {};
Conforyon.Color.Rgb = {};
Conforyon.Color.Sharp = false;
Conforyon.Color.Type = Conforyon.Enum.ColorType.RGB1;

Conforyon.Unicode = {};
Conforyon.Unicode.Char = {};
Conforyon.Unicode.Ascii = {};
Conforyon.Unicode.Bracket = ',';

Conforyon.Typology = {};
Conforyon.Typology.Cm = {};
Conforyon.Typology.Px = {};
Conforyon.Typology.Inch = {};
Conforyon.Typology.Cm.Px = {};
Conforyon.Typology.Px.Cm = {};
Conforyon.Typology.Cm.Inch = {};
Conforyon.Typology.Px.Inch = {};
Conforyon.Typology.Inch.Cm = {};
Conforyon.Typology.Inch.Px = {};
Conforyon.Typology.PostComma = 0;

Conforyon.Storage = {};
Conforyon.Storage.Auto = {};
Conforyon.Storage.Normal = {};
Conforyon.Storage.Comma = false;
Conforyon.Storage.PostComma = 0;
Conforyon.Storage.Decimal = false;
Conforyon.Storage.TypeText = false;

Conforyon.Cryptology = {};
Conforyon.Cryptology.Aes = {};
Conforyon.Cryptology.Base = {};
Conforyon.Cryptology.Text = {};
Conforyon.Cryptology.Text.Md5 = {};
Conforyon.Cryptology.Text.Sha1 = {};
Conforyon.Cryptology.Text.Base = {};
Conforyon.Cryptology.Text.Sha256 = {};
Conforyon.Cryptology.Text.Sha384 = {};
Conforyon.Cryptology.Text.Sha512 = {};
Conforyon.Cryptology.Uppercase = false;
Conforyon.Cryptology.IV = "QxQsRoZQws61N46H";
Conforyon.Cryptology.Key = "uS830kWPrPSPyZK0pS7Pgw3wP3SvLOGr";
Conforyon.Cryptology.Mode = Conforyon.Enum.CryptologyCipherMode.CBC;

Conforyon.Temperature = {};
Conforyon.Temperature.Text = true;
Conforyon.Temperature.Kelvin = {};
Conforyon.Temperature.Celsius = {};
Conforyon.Temperature.PostComma = 0;
Conforyon.Temperature.Fahrenheit = {};
Conforyon.Temperature.Kelvin.Celsius = {};
Conforyon.Temperature.Celsius.Kelvin = {};
Conforyon.Temperature.Kelvin.Fahrenheit = {};
Conforyon.Temperature.Fahrenheit.Kelvin = {};
Conforyon.Temperature.Celsius.Fahrenheit = {};
Conforyon.Temperature.Fahrenheit.Celsius = {};



Conforyon.Helper.Value.Get = function (Method = Conforyon.Helper.Value.ValueMethod, First = Conforyon.Helper.Value.First, Last = Conforyon.Helper.Value.Last, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperGetValue", Method, First, Last, Error);
}

Conforyon.Helper.Value.Set = function (Method = Conforyon.Helper.Value.ValueMethod, First = Conforyon.Helper.Value.First, Last = Conforyon.Helper.Value.Last, Value = Conforyon.Helper.Value.Value, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetValue", Method, First, Last, Value, Error);
}

Conforyon.Helper.Value.List = function (Method = Conforyon.Helper.Value.ErrorMethod, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperListValue", Method, Error);
}

Conforyon.Helper.Value.ListJson = function (Method = Conforyon.Helper.Value.ErrorMethod, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperListValueJson", Method, Error);
}

Conforyon.Helper.Value.Reset = function () {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperResetValue");
}


Conforyon.Helper.Culture.GetName = function (Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperGetCultureName", Error);
}

Conforyon.Helper.Culture.GetUiName = function (Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperGetUICultureName", Error);
}

Conforyon.Helper.Culture.GetThreadName = function (Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperGetThreadCultureName", Error);
}

Conforyon.Helper.Culture.GetThreadUiName = function (Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperGetThreadUICultureName", Error);
}

Conforyon.Helper.Culture.Set = function (Name = Conforyon.Helper.Culture.Name, Override = Conforyon.Helper.Culture.Override) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetCulture", Name, Override);
}

Conforyon.Helper.Culture.SetAll = function (Name = Conforyon.Helper.Culture.Name, Override = Conforyon.Helper.Culture.Override) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetAllCulture", Name, Override);
}

Conforyon.Helper.Culture.SetUi = function (Name = Conforyon.Helper.Culture.Name, Override = Conforyon.Helper.Culture.Override) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetUICulture", Name, Override);
}

Conforyon.Helper.Culture.SetThread = function (Name = Conforyon.Helper.Culture.Name, Override = Conforyon.Helper.Culture.Override) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetThreadCulture", Name, Override);
}

Conforyon.Helper.Culture.SetThreadUi = function (Name = Conforyon.Helper.Culture.Name, Override = Conforyon.Helper.Culture.Override) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HelperSetThreadUICulture", Name, Override);
}



Conforyon.Board.Audio.CopyPath = function (Path) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardAudioCopyPath", Path);
}

Conforyon.Board.Audio.CopyByte = function (Bytes) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardAudioCopyByte", Bytes);
}

Conforyon.Board.Audio.PasteStream = function (Clear = Conforyon.Clear) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardAudioPasteStream", Clear);
}


Conforyon.Board.Text.CopyInteger = function (Number) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyInteger", Number);
}

Conforyon.Board.Text.CopyLong = function (Number) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyLong", Number);
}

Conforyon.Board.Text.CopyDouble = function (Number) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyDouble", Number);
}

Conforyon.Board.Text.CopyFloat = function (Number) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyFloat", Number);
}

Conforyon.Board.Text.CopyObject = function (Value) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyObject", Value);
}

Conforyon.Board.Text.CopyText = function (Text) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextCopyText", Text);
}

Conforyon.Board.Text.PasteText = function (Clear = Conforyon.Clear, Back = Conforyon.Empty) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "BoardTextPasteText", Clear, Back);
}



Conforyon.Color.Hex.RgbObject = function (Hex, Type = Conforyon.Color.Type, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorHexRgbObject", Hex, Type, Error);
}

Conforyon.Color.Hex.RgbText = function (Hex, Type = Conforyon.Color.Type, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorHexRgbText", Hex, Type, Error);
}


Conforyon.Color.Rgb.HexInteger = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorRgbHexInteger", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexLong = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorRgbHexLong", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexObject = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorRgbHexObject", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexText = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "ColorRgbHexText", R, G, B, Sharp, Error);
}



Conforyon.Cryptology.Aes.EncryptInteger = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptInteger", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptLong = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptLong", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptDouble = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptDouble", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptFloat = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptFloat", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptObject = function (Value, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptObject", Value, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptText = function (Text, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesEncryptText", Text, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.DecryptObject = function (Base, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesDecryptObject", Base, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.DecryptText = function (Base, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyAesDecryptText", Base, IV, Key, Mode, Error);
}


Conforyon.Cryptology.Base.DecryptObject = function (Base, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyBaseDecryptObject", Base, Error);
}

Conforyon.Cryptology.Base.DecryptText = function (Base, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyBaseDecryptText", Base, Error);
}


Conforyon.Cryptology.Text.Base.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextBaseEncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Md5.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextMd5EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha1.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha1EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha256.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha256EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha384.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha384EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha512.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "CryptologyTextSha512EncryptText", Text, Uppercase, Error);
}



Conforyon.Hash.File.Md5.EncryptObject = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileMd5EncryptObject", Path, Uppercase, Error);
}

Conforyon.Hash.File.Md5.EncryptText = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileMd5EncryptText", Path, Uppercase, Error);
}


Conforyon.Hash.File.Sha1.EncryptObject = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha1EncryptObject", Path, Uppercase, Error);
}

Conforyon.Hash.File.Sha1.EncryptText = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha1EncryptText", Path, Uppercase, Error);
}


Conforyon.Hash.File.Sha256.EncryptObject = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha256EncryptObject", Path, Uppercase, Error);
}

Conforyon.Hash.File.Sha256.EncryptText = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha256EncryptText", Path, Uppercase, Error);
}


Conforyon.Hash.File.Sha384.EncryptObject = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha384EncryptObject", Path, Uppercase, Error);
}

Conforyon.Hash.File.Sha384.EncryptText = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha384EncryptText", Path, Uppercase, Error);
}


Conforyon.Hash.File.Sha512.EncryptObject = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha512EncryptObject", Path, Uppercase, Error);
}

Conforyon.Hash.File.Sha512.EncryptText = function (Path, Uppercase = Conforyon.Hash.Uppercase, Error = Conforyon.Error) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "HashFileSha512EncryptText", Path, Uppercase, Error);
}



Conforyon.Speed.Kph.Mph.ConvertInteger = function (Kilometers, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedKphMphConvertInteger", Kilometers, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Kph.Mph.ConvertLong = function (Kilometers, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedKphMphConvertLong", Kilometers, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Kph.Mph.ConvertObject = function (Kilometers, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedKphMphConvertObject", Kilometers, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Kph.Mph.ConvertText = function (Kilometers, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedKphMphConvertText", Kilometers, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Speed.Mph.Kph.ConvertInteger = function (Miles, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedMphKphConvertInteger", Miles, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Mph.Kph.ConvertLong = function (Miles, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedMphKphConvertLong", Miles, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Mph.Kph.ConvertObject = function (Miles, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedMphKphConvertObject", Miles, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Speed.Mph.Kph.ConvertText = function (Miles, Decimal, Comma, PostComma = Conforyon.Speed.PostComma, Text = Conforyon.Speed.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "SpeedMphKphConvertText", Miles, Decimal, Comma, PostComma, Text, Error);
}



Conforyon.Storage.Auto.ConvertInteger = function (InputVariable, InputType, TypeText = Conforyon.Storage.TypeText, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageAutoConvertInteger", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Auto.ConvertLong = function (InputVariable, InputType, TypeText = Conforyon.Storage.TypeText, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageAutoConvertLong", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Auto.ConvertObject = function (InputVariable, InputType, TypeText = Conforyon.Storage.TypeText, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageAutoConvertObject", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Auto.ConvertText = function (InputVariable, InputType, TypeText = Conforyon.Storage.TypeText, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageAutoConvertText", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}


Conforyon.Storage.Normal.ConvertInteger = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageNormalConvertInteger", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Normal.ConvertLong = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageNormalConvertLong", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Normal.ConvertObject = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageNormalConvertObject", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Storage.Normal.ConvertText = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Storage.Decimal, Comma = Conforyon.Storage.Comma, PostComma = Conforyon.Storage.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "StorageNormalConvertText", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}



Conforyon.Temperature.Kelvin.Celsius.ConvertInteger = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinCelsiusConvertInteger", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Celsius.ConvertLong = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinCelsiusConvertLong", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Celsius.ConvertObject = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinCelsiusConvertObject", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Celsius.ConvertText = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinCelsiusConvertText", Kelvin, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Temperature.Kelvin.Fahrenheit.ConvertInteger = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinFahrenheitConvertInteger", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Fahrenheit.ConvertLong = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinFahrenheitConvertLong", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Fahrenheit.ConvertObject = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinFahrenheitConvertObject", Kelvin, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Kelvin.Fahrenheit.ConvertText = function (Kelvin, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureKelvinFahrenheitConvertText", Kelvin, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Temperature.Celsius.Kelvin.ConvertInteger = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusKelvinConvertInteger", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Kelvin.ConvertLong = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusKelvinConvertLong", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Kelvin.ConvertObject = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusKelvinConvertObject", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Kelvin.ConvertText = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusKelvinConvertText", Celsius, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Temperature.Celsius.Fahrenheit.ConvertInteger = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusFahrenheitConvertInteger", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Fahrenheit.ConvertLong = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusFahrenheitConvertLong", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Fahrenheit.ConvertObject = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusFahrenheitConvertObject", Celsius, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Celsius.Fahrenheit.ConvertText = function (Celsius, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureCelsiusFahrenheitConvertText", Celsius, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Temperature.Fahrenheit.Kelvin.ConvertInteger = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitKelvinConvertInteger", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Kelvin.ConvertLong = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitKelvinConvertLong", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Kelvin.ConvertObject = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitKelvinConvertObject", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Kelvin.ConvertText = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitKelvinConvertText", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}


Conforyon.Temperature.Fahrenheit.Celsius.ConvertInteger = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitCelsiusConvertInteger", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Celsius.ConvertLong = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitCelsiusConvertLong", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Celsius.ConvertObject = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitCelsiusConvertObject", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}

Conforyon.Temperature.Fahrenheit.Celsius.ConvertText = function (Fahrenheit, Decimal, Comma, PostComma = Conforyon.Temperature.PostComma, Text = Conforyon.Temperature.Text, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TemperatureFahrenheitCelsiusConvertText", Fahrenheit, Decimal, Comma, PostComma, Text, Error);
}



Conforyon.Time.Auto.ConvertInteger = function (InputVariable, InputType, TypeText = Conforyon.Time.TypeText, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeAutoConvertInteger", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Auto.ConvertLong = function (InputVariable, InputType, TypeText = Conforyon.Time.TypeText, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeAutoConvertLong", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Auto.ConvertObject = function (InputVariable, InputType, TypeText = Conforyon.Time.TypeText, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeAutoConvertObject", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Auto.ConvertText = function (InputVariable, InputType, TypeText = Conforyon.Time.TypeText, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeAutoConvertText", InputVariable, InputType, TypeText, Decimal, Comma, PostComma, Error);
}


Conforyon.Time.Normal.ConvertInteger = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeNormalConvertInteger", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Normal.ConvertLong = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeNormalConvertLong", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Normal.ConvertObject = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeNormalConvertObject", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}

Conforyon.Time.Normal.ConvertText = function (InputVariable, InputType, TypeConvert, Decimal = Conforyon.Time.Decimal, Comma = Conforyon.Time.Comma, PostComma = Conforyon.Time.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TimeNormalConvertText", InputVariable, InputType, TypeConvert, Decimal, Comma, PostComma, Error);
}



Conforyon.Typology.Cm.Px.ConvertInteger = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmPxConvertInteger", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Px.ConvertLong = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmPxConvertLong", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Px.ConvertObject = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmPxConvertObject", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Px.ConvertText = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmPxConvertText", Centimeter, Decimal, Comma, PostComma, Error);
}


Conforyon.Typology.Cm.Inch.ConvertInteger = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmInchConvertInteger", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Inch.ConvertLong = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmInchConvertLong", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Inch.ConvertObject = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmInchConvertObject", Centimeter, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Cm.Inch.ConvertText = function (Centimeter, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyCmInchConvertText", Centimeter, Decimal, Comma, PostComma, Error);
}


Conforyon.Typology.Px.Cm.ConvertInteger = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxCmConvertInteger", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Cm.ConvertLong = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxCmConvertLong", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Cm.ConvertObject = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxCmConvertObject", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Cm.ConvertText = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxCmConvertText", Pixel, Decimal, Comma, PostComma, Error);
}


Conforyon.Typology.Px.Inch.ConvertInteger = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxInchConvertInteger", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Inch.ConvertLong = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxInchConvertLong", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Inch.ConvertObject = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxInchConvertObject", Pixel, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Px.Inch.ConvertText = function (Pixel, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyPxInchConvertText", Pixel, Decimal, Comma, PostComma, Error);
}


Conforyon.Typology.Inch.Cm.ConvertInteger = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchCmConvertInteger", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Cm.ConvertLong = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchCmConvertLong", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Cm.ConvertObject = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchCmConvertObject", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Cm.ConvertText = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchCmConvertText", Inch, Decimal, Comma, PostComma, Error);
}


Conforyon.Typology.Inch.Px.ConvertInteger = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchPxConvertInteger", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Px.ConvertLong = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchPxConvertLong", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Px.ConvertObject = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchPxConvertObject", Inch, Decimal, Comma, PostComma, Error);
}

Conforyon.Typology.Inch.Px.ConvertText = function (Inch, Decimal, Comma, PostComma = Conforyon.Typology.PostComma, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "TypologyInchPxConvertText", Inch, Decimal, Comma, PostComma, Error);
}



Conforyon.Unicode.Ascii.CharInteger = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharInteger", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharLong = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharLong", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharDouble = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharDouble", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharFloat = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharFloat", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharChar = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharChar", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharObject = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharObject", Ascii, Bracket, Error);
}

Conforyon.Unicode.Ascii.CharText = function (Ascii, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeAsciiCharText", Ascii, Bracket, Error);
}


Conforyon.Unicode.Char.AsciiInteger = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiInteger", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiLong = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiLong", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiDouble = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiDouble", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiFloat = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiFloat", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiChar = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiChar", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiObject = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiObject", Char, Bracket, Error);
}

Conforyon.Unicode.Char.AsciiText = function (Char, Bracket = Conforyon.Unicode.Bracket, Error = Conforyon.Error) {
    return Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.Conforyon", "UnicodeCharAsciiText", Char, Bracket, Error);
}