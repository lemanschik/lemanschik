// Based on https://github.com/bytecodealliance/wasi/tree/d3c7a34193cb33d994b11104b22d234530232b5f

export const FD_STDIN = 0;
export const FD_STDOUT = 1;
export const FD_STDERR = 2;

export const CLOCKID_REALTIME = 0;
export const CLOCKID_MONOTONIC = 1;
export const CLOCKID_PROCESS_CPUTIME_ID = 2;
export const CLOCKID_THREAD_CPUTIME_ID = 3;

export const ERRNO_SUCCESS = 0;
export const ERRNO_2BIG = 1;
export const ERRNO_ACCES = 2;
export const ERRNO_ADDRINUSE = 3;
export const ERRNO_ADDRNOTAVAIL = 4;
export const ERRNO_AFNOSUPPORT = 5;
export const ERRNO_AGAIN = 6;
export const ERRNO_ALREADY = 7;
export const ERRNO_BADF = 8;
export const ERRNO_BADMSG = 9;
export const ERRNO_BUSY = 10;
export const ERRNO_CANCELED = 11;
export const ERRNO_CHILD = 12;
export const ERRNO_CONNABORTED = 13;
export const ERRNO_CONNREFUSED = 14;
export const ERRNO_CONNRESET = 15;
export const ERRNO_DEADLK = 16;
export const ERRNO_DESTADDRREQ = 17;
export const ERRNO_DOM = 18;
export const ERRNO_DQUOT = 19;
export const ERRNO_EXIST = 20;
export const ERRNO_FAULT = 21;
export const ERRNO_FBIG = 22;
export const ERRNO_HOSTUNREACH = 23;
export const ERRNO_IDRM = 24;
export const ERRNO_ILSEQ = 25;
export const ERRNO_INPROGRESS = 26;
export const ERRNO_INTR = 27;
export const ERRNO_INVAL = 28;
export const ERRNO_IO = 29;
export const ERRNO_ISCONN = 30;
export const ERRNO_ISDIR = 31;
export const ERRNO_LOOP = 32;
export const ERRNO_MFILE = 33;
export const ERRNO_MLINK = 34;
export const ERRNO_MSGSIZE = 35;
export const ERRNO_MULTIHOP = 36;
export const ERRNO_NAMETOOLONG = 37;
export const ERRNO_NETDOWN = 38;
export const ERRNO_NETRESET = 39;
export const ERRNO_NETUNREACH = 40;
export const ERRNO_NFILE = 41;
export const ERRNO_NOBUFS = 42;
export const ERRNO_NODEV = 43;
export const ERRNO_NOENT = 44;
export const ERRNO_NOEXEC = 45;
export const ERRNO_NOLCK = 46;
export const ERRNO_NOLINK = 47;
export const ERRNO_NOMEM = 48;
export const ERRNO_NOMSG = 49;
export const ERRNO_NOPROTOOPT = 50;
export const ERRNO_NOSPC = 51;
export const ERRNO_NOSYS = 52;
export const ERRNO_NOTCONN = 53;
export const ERRNO_NOTDIR = 54;
export const ERRNO_NOTEMPTY = 55;
export const ERRNO_NOTRECOVERABLE = 56;
export const ERRNO_NOTSOCK = 57;
export const ERRNO_NOTSUP = 58;
export const ERRNO_NOTTY = 59;
export const ERRNO_NXIO = 60;
export const ERRNO_OVERFLOW = 61;
export const ERRNO_OWNERDEAD = 62;
export const ERRNO_PERM = 63;
export const ERRNO_PIPE = 64;
export const ERRNO_PROTO = 65;
export const ERRNO_PROTONOSUPPORT = 66;
export const ERRNO_PROTOTYPE = 67;
export const ERRNO_RANGE = 68;
export const ERRNO_ROFS = 69;
export const ERRNO_SPIPE = 70;
export const ERRNO_SRCH = 71;
export const ERRNO_STALE = 72;
export const ERRNO_TIMEDOUT = 73;
export const ERRNO_TXTBSY = 74;
export const ERRNO_XDEV = 75;
export const ERRNO_NOTCAPABLE = 76;

export const RIGHTS_FD_DATASYNC = 1 << 0;
export const RIGHTS_FD_READ = 1 << 1;
export const RIGHTS_FD_SEEK = 1 << 2;
export const RIGHTS_FD_FDSTAT_SET_FLAGS = 1 << 3;
export const RIGHTS_FD_SYNC = 1 << 4;
export const RIGHTS_FD_TELL = 1 << 5;
export const RIGHTS_FD_WRITE = 1 << 6;
export const RIGHTS_FD_ADVISE = 1 << 7;
export const RIGHTS_FD_ALLOCATE = 1 << 8;
export const RIGHTS_PATH_CREATE_DIRECTORY = 1 << 9;
export const RIGHTS_PATH_CREATE_FILE = 1 << 10;
export const RIGHTS_PATH_LINK_SOURCE = 1 << 11;
export const RIGHTS_PATH_LINK_TARGET = 1 << 12;
export const RIGHTS_PATH_OPEN = 1 << 13;
export const RIGHTS_FD_READDIR = 1 << 14;
export const RIGHTS_PATH_READLINK = 1 << 15;
export const RIGHTS_PATH_RENAME_SOURCE = 1 << 16;
export const RIGHTS_PATH_RENAME_TARGET = 1 << 17;
export const RIGHTS_PATH_FILESTAT_GET = 1 << 18;
export const RIGHTS_PATH_FILESTAT_SET_SIZE = 1 << 19;
export const RIGHTS_PATH_FILESTAT_SET_TIMES = 1 << 20;
export const RIGHTS_FD_FILESTAT_GET = 1 << 21;
export const RIGHTS_FD_FILESTAT_SET_SIZE = 1 << 22;
export const RIGHTS_FD_FILESTAT_SET_TIMES = 1 << 23;
export const RIGHTS_PATH_SYMLINK = 1 << 24;
export const RIGHTS_PATH_REMOVE_DIRECTORY = 1 << 25;
export const RIGHTS_PATH_UNLINK_FILE = 1 << 26;
export const RIGHTS_POLL_FD_READWRITE = 1 << 27;
export const RIGHTS_SOCK_SHUTDOWN = 1 << 28;

export class Iovec {
  buf: number;
  buf_len: number;

  static read_bytes(view: DataView, ptr: number): Iovec {
    let iovec = new Iovec();
    iovec.buf = view.getUint32(ptr, true);
    iovec.buf_len = view.getUint32(ptr + 4, true);
    return iovec;
  }

  static read_bytes_array(
    view: DataView,
    ptr: number,
    len: number
  ): Array<Iovec> {
    let iovecs = [];
    for (let i = 0; i < len; i++) {
      iovecs.push(Iovec.read_bytes(view, ptr + 8 * i));
    }
    return iovecs;
  }
}

export class Ciovec {
  buf: number;
  buf_len: number;

  static read_bytes(view: DataView, ptr: number): Ciovec {
    let iovec = new Ciovec();
    iovec.buf = view.getUint32(ptr, true);
    iovec.buf_len = view.getUint32(ptr + 4, true);
    return iovec;
  }

  static read_bytes_array(
    view: DataView,
    ptr: number,
    len: number
  ): Array<Ciovec> {
    let iovecs = [];
    for (let i = 0; i < len; i++) {
      iovecs.push(Ciovec.read_bytes(view, ptr + 8 * i));
    }
    return iovecs;
  }
}

export const WHENCE_SET = 0;
export const WHENCE_CUR = 1;
export const WHENCE_END = 2;

export const FILETYPE_UNKNOWN = 0;
export const FILETYPE_BLOCK_DEVICE = 1;
export const FILETYPE_CHARACTER_DEVICE = 2;
export const FILETYPE_DIRECTORY = 3;
export const FILETYPE_REGULAR_FILE = 4;
export const FILETYPE_SOCKET_DGRAM = 5;
export const FILETYPE_SOCKET_STREAM = 6;
export const FILETYPE_SYMBOLIC_LINK = 7;

declare var TextEncoder: {
  prototype: TextEncoder;
  new (encoding?: string): TextEncoder;
};

export class Dirent {
  d_next: bigint;
  d_ino: bigint = 1n;
  d_namlen: number;
  d_type: number;
  dir_name: Uint8Array;

  constructor(next_cookie: bigint, name: string, type: number) {
    let encoded_name = new TextEncoder("utf-8").encode(name);

    this.d_next = next_cookie;
    this.d_namlen = encoded_name.byteLength;
    this.d_type = type;
    this.dir_name = encoded_name;
  }

  length(): number {
    return 24 + this.dir_name.byteLength;
  }

  write_bytes(view: DataView, view8: Uint8Array, ptr: number) {
    // @ts-ignore
    view.setBigUint64(ptr, this.d_next, true);
    // @ts-ignore
    view.setBigUint64(ptr + 8, this.d_ino, true);
    view.setUint32(ptr + 16, this.dir_name.length, true); // d_namlen
    view.setUint8(ptr + 20, this.d_type);
    view8.set(this.dir_name, ptr + 24);
  }
}

export const ADVICE_NORMAL = 0;
export const ADVICE_SEQUENTIAL = 1;
export const ADVICE_RANDOM = 2;
export const ADVICE_WILLNEED = 3;
export const ADVICE_DONTNEED = 4;
export const ADVICE_NOREUSE = 5;

export const FDFLAGS_APPEND = 1 << 0;
export const FDFLAGS_DSYNC = 1 << 1;
export const FDFLAGS_NONBLOCK = 1 << 2;
export const FDFLAGS_RSYNC = 1 << 3;
export const FDFLAGS_SYNC = 1 << 4;

export class Fdstat {
  fs_filetype: number;
  fs_flags: number;
  fs_rights_base: bigint = 0n;
  fs_rights_inherited: bigint = 0n;

  constructor(filetype: number, flags: number) {
    this.fs_filetype = filetype;
    this.fs_flags = flags;
  }

  write_bytes(view: DataView, ptr: number) {
    view.setUint8(ptr, this.fs_filetype);
    view.setUint16(ptr + 2, this.fs_flags, true);
    // @ts-ignore
    view.setBigUint64(ptr + 8, this.fs_rights_base, true);
    // @ts-ignore
    view.setBigUint64(ptr + 16, this.fs_rights_inherited, true);
  }
}

export const FSTFLAGS_ATIM = 1 << 0;
export const FSTFLAGS_ATIM_NOW = 1 << 1;
export const FSTFLAGS_MTIM = 1 << 2;
export const FSTFLAGS_MTIM_NOW = 1 << 3;

export const OFLAGS_CREAT = 1 << 0;
export const OFLAGS_DIRECTORY = 1 << 1;
export const OFLAGS_EXCL = 1 << 2;
export const OFLAGS_TRUNC = 1 << 3;

export class Filestat {
  dev: bigint = 0n;
  ino: bigint = 0n;
  filetype: number;
  nlink: bigint = 0n;
  size: bigint;
  atim: bigint = 0n;
  mtim: bigint = 0n;
  ctim: bigint = 0n;

  constructor(filetype: number, size: number | bigint) {
    this.filetype = filetype;
    // @ts-ignore
    this.size = BigInt(size);
  }

  write_bytes(view: DataView, ptr: number) {
    // @ts-ignore
    view.setBigUint64(ptr, this.dev, true);
    // @ts-ignore
    view.setBigUint64(ptr + 8, this.ino, true);
    view.setUint8(ptr + 16, this.filetype);
    // @ts-ignore
    view.setBigUint64(ptr + 24, this.nlink, true);
    // @ts-ignore
    view.setBigUint64(ptr + 32, this.size, true);
    // @ts-ignore
    view.setBigUint64(ptr + 38, this.atim, true);
    // @ts-ignore
    view.setBigUint64(ptr + 46, this.mtim, true);
    // @ts-ignore
    view.setBigUint64(ptr + 52, this.ctim, true);
  }
}

export const EVENTTYPE_CLOCK = 0;
export const EVENTTYPE_FD_READ = 1;
export const EVENTTYPE_FD_WRITE = 2;

export const EVENTRWFLAGS_FD_READWRITE_HANGUP = 1 << 0;

export const SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME = 1 << 0;

export const SIGNAL_NONE = 0;
export const SIGNAL_HUP = 1;
export const SIGNAL_INT = 2;
export const SIGNAL_QUIT = 3;
export const SIGNAL_ILL = 4;
export const SIGNAL_TRAP = 5;
export const SIGNAL_ABRT = 6;
export const SIGNAL_BUS = 7;
export const SIGNAL_FPE = 8;
export const SIGNAL_KILL = 9;
export const SIGNAL_USR1 = 10;
export const SIGNAL_SEGV = 11;
export const SIGNAL_USR2 = 12;
export const SIGNAL_PIPE = 13;
export const SIGNAL_ALRM = 14;
export const SIGNAL_TERM = 15;
export const SIGNAL_CHLD = 16;
export const SIGNAL_CONT = 17;
export const SIGNAL_STOP = 18;
export const SIGNAL_TSTP = 19;
export const SIGNAL_TTIN = 20;
export const SIGNAL_TTOU = 21;
export const SIGNAL_URG = 22;
export const SIGNAL_XCPU = 23;
export const SIGNAL_XFSZ = 24;
export const SIGNAL_VTALRM = 25;
export const SIGNAL_PROF = 26;
export const SIGNAL_WINCH = 27;
export const SIGNAL_POLL = 28;
export const SIGNAL_PWR = 29;
export const SIGNAL_SYS = 30;

export const RIFLAGS_RECV_PEEK = 1 << 0;
export const RIFLAGS_RECV_WAITALL = 1 << 1;

export const ROFLAGS_RECV_DATA_TRUNCATED = 1 << 0;

export const SDFLAGS_RD = 1 << 0;
export const SDFLAGS_WR = 1 << 1;

export const PREOPENTYPE_DIR = 0;

export class PrestatDir {
  pr_name_len: number;

  constructor(name_len: number) {
    this.pr_name_len = name_len;
  }

  write_bytes(view: DataView, ptr: number) {
    view.setUint32(ptr, this.pr_name_len, true);
  }
}

export class Prestat {
  tag: number;
  inner: PrestatDir;

  static dir(name_len: number): Prestat {
    let prestat = new Prestat();
    prestat.tag = PREOPENTYPE_DIR;
    prestat.inner = new PrestatDir(name_len);
    return prestat;
  }

  write_bytes(view: DataView, ptr: number) {
    view.setUint32(ptr, this.tag, true);
    this.inner.write_bytes(view, ptr + 4);
  }
}

// End wasi def

export class Fd {
  fd_advise(
    offset: number | bigint,
    len: bigint,
    advice: number | bigint
  ): number {
    return -1;
  }
  fd_allocate(offset: number | bigint, len: bigint): number {
    return -1;
  }
  fd_close(): number {
    return -1;
  }
  fd_datasync(): number {
    return -1;
  }
  fd_fdstat_get(): { ret: number; fdstat: wasi.Fdstat | null } {
    return { ret: -1, fdstat: null };
  }
  fd_fdstat_set_flags(flags: number): number {
    return -1;
  }
  fd_fdstat_set_rights(
    fs_rights_base: bigint,
    fs_rights_inheriting: bigint
  ): number {
    return -1;
  }
  fd_filestat_get(): { ret: number; filestat: wasi.Filestat | null } {
    return { ret: -1, filestat: null };
  }
  fd_filestat_set_size(size: number | bigint): number {
    return -1;
  }
  fd_filestat_set_times(atim, mtim, fst_flags): number {
    return -1;
  }
  fd_pread(view8: Uint8Array, iovs, offset: number | bigint) {
    return { ret: -1, nread: 0 };
  }
  fd_prestat_get() {
    return { ret: -1, prestat: null };
  }
  fd_prestat_dir_name(path_ptr: number, path_len: number) {
    return { ret: -1, prestat_dir_name: null };
  }
  fd_pwrite(view8: Uint8Array, iovs, offset: number | bigint) {
    return { ret: -1, nwritten: 0 };
  }
  fd_read(
    view8: Uint8Array,
    iovs: Array<wasi.Iovec>
  ): { ret: number; nread: number } {
    return { ret: -1, nread: 0 };
  }
  fd_readdir_single(cookie: bigint) {
    return { ret: -1, dirent: null };
  }
  fd_seek(offset: number | bigint, whence): { ret: number; offset: bigint } {
    return { ret: -1, offset: 0n };
  }
  fd_sync(): number {
    return -1;
  }
  fd_tell(): { ret: number; offset: bigint } {
    return { ret: -1, offset: 0n };
  }
  fd_write(view8, iovs) {
    return { ret: -1, nwritten: 0 };
  }
  path_create_directory(path): number {
    return -1;
  }
  path_filestat_get(flags, path) {
    return { ret: -1, filestat: null };
  }
  path_filestat_set_times(flags, path, atim, mtim, fst_flags) {
    return -1;
  }
  path_link(old_fd, old_flags, old_path, new_path): number {
    return -1;
  }
  path_open(
    dirflags,
    path,
    oflags,
    fs_rights_base,
    fs_rights_inheriting,
    fdflags
  ) {
    return { ret: -1, fd_obj: null };
  }
  path_readlink(path) {
    return { ret: -1, data: null };
  }
  path_remove_directory(path): number {
    return -1;
  }
  path_rename(old_path, new_fd, new_path): number {
    return -1;
  }
  path_symlink(old_path, new_path): number {
    return -1;
  }
  path_unlink_file(path): number {
    return -1;
  }
}

// end fd file descriptor 

class WASI {
    /// Start a WASI command
    start(instance) {
        this.inst = instance;
        instance.exports._start();
    }
    /// Initialize a WASI reactor
    initialize(instance) {
        this.inst = instance;
        instance.exports._initialize();
    }
    constructor(args, env, fds) {
        this.args = [];
        this.env = [];
        this.fds = [];
        this.args = args;
        this.env = env;
        this.fds = fds;
        let self = this;
        this.wasiImport = {
            args_sizes_get(argc, argv_buf_size) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                buffer.setUint32(argc, self.args.length, true);
                let buf_size = 0;
                for (let arg of self.args) {
                    buf_size += arg.length + 1;
                }
                buffer.setUint32(argv_buf_size, buf_size, true);
                //console.log(buffer.getUint32(argc, true), buffer.getUint32(argv_buf_size, true));
                return 0;
            },
            args_get(argv, argv_buf) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                let orig_argv_buf = argv_buf;
                for (let i = 0; i < self.args.length; i++) {
                    buffer.setUint32(argv, argv_buf, true);
                    argv += 4;
                    let arg = new TextEncoder("utf-8").encode(self.args[i]);
                    buffer8.set(arg, argv_buf);
                    buffer.setUint8(argv_buf + arg.length, 0);
                    argv_buf += arg.length + 1;
                }
                //console.log(new TextDecoder("utf-8").decode(buffer8.slice(orig_argv_buf, argv_buf)));
                return 0;
            },
            environ_sizes_get(environ_count, environ_size) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                buffer.setUint32(environ_count, self.env.length, true);
                let buf_size = 0;
                for (let environ of self.env) {
                    buf_size += environ.length + 1;
                }
                buffer.setUint32(environ_size, buf_size, true);
                //console.log(buffer.getUint32(environ_count, true), buffer.getUint32(environ_size, true));
                return 0;
            },
            environ_get(environ, environ_buf) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                let orig_environ_buf = environ_buf;
                for (let i = 0; i < env.length; i++) {
                    buffer.setUint32(environ, environ_buf, true);
                    environ += 4;
                    let e = new TextEncoder("utf-8").encode(env[i]);
                    buffer8.set(e, environ_buf);
                    buffer.setUint8(environ_buf + e.length, 0);
                    environ_buf += e.length + 1;
                }
                //console.log(new TextDecoder("utf-8").decode(buffer8.slice(orig_environ_buf, environ_buf)));
                return 0;
            },
            clock_res_get(id, res_ptr) {
                throw "unimplemented";
            },
            clock_time_get(id, precision, time) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                if (id === wasi.CLOCKID_REALTIME) {
                    buffer.setBigUint64(time, BigInt(new Date().getTime()) * 1000000n, true);
                }
                else if (id == wasi.CLOCKID_MONOTONIC) {
                    let monotonic_time;
                    try {
                        monotonic_time = BigInt(Math.round(performance.now() * 1000000));
                    }
                    catch (e) {
                        // performance.now() is only available in browsers.
                        // TODO use the perf_hooks builtin module for NodeJS
                        monotonic_time = 0n;
                    }
                    buffer.setBigUint64(time, monotonic_time, true);
                }
                else {
                    // TODO
                    buffer.setBigUint64(time, 0n, true);
                }
                return 0;
            },
            fd_advise(fd, offset, len, advice) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_advise(offset, len, advice);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_allocate(fd, offset, len) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_allocate(offset, len);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_close(fd) {
                if (self.fds[fd] != undefined) {
                    let ret = self.fds[fd].fd_close();
                    // @ts-ignore
                    self.fds[fd] = undefined;
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_datasync(fd) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_datasync();
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_fdstat_get(fd, fdstat_ptr) {
                if (self.fds[fd] != undefined) {
                    let { ret, fdstat } = self.fds[fd].fd_fdstat_get();
                    if (fdstat != null) {
                        fdstat.write_bytes(new DataView(self.inst.exports.memory.buffer), fdstat_ptr);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_fdstat_set_flags(fd, flags) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_fdstat_set_flags(flags);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_fdstat_set_rights(fd, fs_rights_base, fs_rights_inheriting) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_fdstat_set_rights(fs_rights_base, fs_rights_inheriting);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_filestat_get(fd, filestat_ptr) {
                if (self.fds[fd] != undefined) {
                    let { ret, filestat } = self.fds[fd].fd_filestat_get();
                    if (filestat != null) {
                        filestat.write_bytes(new DataView(self.inst.exports.memory.buffer), filestat_ptr);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_filestat_set_size(fd, size) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_filestat_set_size(size);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_filestat_set_times(fd, atim, mtim, fst_flags) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_filestat_set_times(atim, mtim, fst_flags);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_pread(fd, iovs_ptr, iovs_len, offset, nread_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let iovecs = wasi.Iovec.read_bytes_array(buffer, iovs_ptr, iovs_len);
                    let { ret, nread } = self.fds[fd].fd_pread(buffer8, iovecs, offset);
                    buffer.setUint32(nread_ptr, nread, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_prestat_get(fd, buf_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let { ret, prestat } = self.fds[fd].fd_prestat_get();
                    if (prestat != null) {
                        prestat.write_bytes(buffer, buf_ptr);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_prestat_dir_name(fd, path_ptr, path_len) {
                // FIXME don't ignore path_len
                if (self.fds[fd] != undefined) {
                    // @ts-ignore
                    let { ret, prestat_dir_name } = self.fds[fd].fd_prestat_dir_name();
                    if (prestat_dir_name != null) {
                        let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                        buffer8.set(prestat_dir_name, path_ptr);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_pwrite(fd, iovs_ptr, iovs_len, offset, nwritten_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let iovecs = wasi.Ciovec.read_bytes_array(buffer, iovs_ptr, iovs_len);
                    let { ret, nwritten } = self.fds[fd].fd_pwrite(buffer8, iovecs, offset);
                    buffer.setUint32(nwritten_ptr, nwritten, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_read(fd, iovs_ptr, iovs_len, nread_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let iovecs = wasi.Iovec.read_bytes_array(buffer, iovs_ptr, iovs_len);
                    let { ret, nread } = self.fds[fd].fd_read(buffer8, iovecs);
                    buffer.setUint32(nread_ptr, nread, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_readdir(fd, buf, buf_len, cookie, bufused_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let bufused = 0;
                    while (true) {
                        let { ret, dirent } = self.fds[fd].fd_readdir_single(cookie);
                        if (ret != 0) {
                            buffer.setUint32(bufused_ptr, bufused, true);
                            return ret;
                        }
                        if (dirent == null) {
                            break;
                        }
                        let offset = dirent.length();
                        if (buf_len - bufused < offset) {
                            break;
                        }
                        dirent.write_bytes(buffer, buffer8, buf);
                        buf += offset;
                        bufused += offset;
                        cookie = dirent.d_next;
                    }
                    buffer.setUint32(bufused_ptr, bufused, true);
                    return 0;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_renumber(fd, to) {
                if (self.fds[fd] != undefined && self.fds[to] != undefined) {
                    let ret = self.fds[to].fd_close();
                    if (ret != 0) {
                        return ret;
                    }
                    self.fds[to] = self.fds[fd];
                    self.fds[fd] = undefined;
                    return 0;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_seek(fd, offset, whence, offset_out_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let { ret, offset: offset_out } = self.fds[fd].fd_seek(offset, whence);
                    buffer.setBigInt64(offset_out_ptr, offset_out, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_sync(fd) {
                if (self.fds[fd] != undefined) {
                    return self.fds[fd].fd_sync();
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_tell(fd, offset_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let { ret, offset } = self.fds[fd].fd_tell();
                    buffer.setBigUint64(offset_ptr, offset, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            fd_write(fd, iovs_ptr, iovs_len, nwritten_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let iovecs = wasi.Ciovec.read_bytes_array(buffer, iovs_ptr, iovs_len);
                    let { ret, nwritten } = self.fds[fd].fd_write(buffer8, iovecs);
                    buffer.setUint32(nwritten_ptr, nwritten, true);
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_create_directory(fd, path_ptr, path_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    return self.fds[fd].path_create_directory(path);
                }
            },
            path_filestat_get(fd, flags, path_ptr, path_len, filestat_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    let { ret, filestat } = self.fds[fd].path_filestat_get(flags, path);
                    if (filestat != null) {
                        filestat.write_bytes(buffer, filestat_ptr);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_filestat_set_times(fd, flags, path_ptr, path_len, atim, mtim, fst_flags) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    return self.fds[fd].path_filestat_set_times(flags, path, atim, mtim, fst_flags);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_link(old_fd, old_flags, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[old_fd] != undefined && self.fds[new_fd] != undefined) {
                    let old_path = new TextDecoder("utf-8").decode(buffer8.slice(old_path_ptr, old_path_ptr + old_path_len));
                    let new_path = new TextDecoder("utf-8").decode(buffer8.slice(new_path_ptr, new_path_ptr + new_path_len));
                    return self.fds[new_fd].path_link(old_fd, old_flags, old_path, new_path);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_open(fd, dirflags, path_ptr, path_len, oflags, fs_rights_base, fs_rights_inheriting, fd_flags, opened_fd_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    //console.log(path);
                    let { ret, fd_obj } = self.fds[fd].path_open(dirflags, path, oflags, fs_rights_base, fs_rights_inheriting, fd_flags);
                    if (ret != 0) {
                        return ret;
                    }
                    // FIXME use first free fd
                    self.fds.push(fd_obj);
                    let opened_fd = self.fds.length - 1;
                    buffer.setUint32(opened_fd_ptr, opened_fd, true);
                    return 0;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_readlink(fd, path_ptr, path_len, buf_ptr, buf_len, nread_ptr) {
                let buffer = new DataView(self.inst.exports.memory.buffer);
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    //console.log(path);
                    let { ret, data } = self.fds[fd].path_readlink(path);
                    if (data != null) {
                        if (data.length > buf_len) {
                            buffer.setUint32(nread_ptr, 0, true);
                            return wasi.ERRNO_BADF;
                        }
                        buffer8.set(data, buf_ptr);
                        buffer.setUint32(nread_ptr, data.length, true);
                    }
                    return ret;
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_remove_directory(fd, path_ptr, path_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    return self.fds[fd].path_remove_directory(path);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_rename(fd, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len) {
                throw "FIXME what is the best abstraction for this?";
            },
            path_symlink(old_path_ptr, old_path_len, fd, new_path_ptr, new_path_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let old_path = new TextDecoder("utf-8").decode(buffer8.slice(old_path_ptr, old_path_ptr + old_path_len));
                    let new_path = new TextDecoder("utf-8").decode(buffer8.slice(new_path_ptr, new_path_ptr + new_path_len));
                    return self.fds[fd].path_symlink(old_path, new_path);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            path_unlink_file(fd, path_ptr, path_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                if (self.fds[fd] != undefined) {
                    let path = new TextDecoder("utf-8").decode(buffer8.slice(path_ptr, path_ptr + path_len));
                    return self.fds[fd].path_unlink_file(path);
                }
                else {
                    return wasi.ERRNO_BADF;
                }
            },
            poll_oneoff(in_, out, nsubscriptions) {
                throw "async io not supported";
            },
            proc_exit(exit_code) {
                throw "exit with exit code " + exit_code;
            },
            proc_raise(sig) {
                throw "raised signal " + sig;
            },
            sched_yield() { },
            random_get(buf, buf_len) {
                let buffer8 = new Uint8Array(self.inst.exports.memory.buffer);
                for (let i = 0; i < buf_len; i++) {
                    buffer8[buf + i] = (Math.random() * 256) | 0;
                }
            },
            sock_recv(fd, ri_data, ri_flags) {
                throw "sockets not supported";
            },
            sock_send(fd, si_data, si_flags) {
                throw "sockets not supported";
            },
            sock_shutdown(fd, how) {
                throw "sockets not supported";
            },
        };
    }
}

